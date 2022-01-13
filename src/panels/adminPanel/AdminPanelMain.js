import React, { useState, useEffect, useReducer } from "react";
import { navigate } from "@reach/router";
import { Tabs, Input, Button } from "antd";
const { TabPane } = Tabs;

import { Icon20HomeOutline } from "@vkontakte/icons";
import { NAME_PROJECT } from "../../constants";

import "./AdminPanelMain.scss";

const AdminPanelMain = ({
  onChangeAction,
  editLinkGroup,
  getPlatform,
  getButtonStats,
  getGroupId,
  notifyLinks,
  editLinkNotify,
}) => {
  const arrStats = [];

  for (let key in getButtonStats) {
    if (!key.includes("SquidGameAPP")) {
      arrStats.push({ [key]: getButtonStats[key] });
    }
  }

  return (
    <Tabs
      defaultActiveKey="pages"
      centered
      tabPosition="top"
      style={{ marginTop: getPlatform !== "web" ? "50px" : "0" }}
    >
      <TabPane
        tab={
          <div
            className="admin-panel-container__icon"
            onClick={() => navigate("results-year-1")}
            // onClick={() => navigate("/")}
          >
            {" "}
            <Icon20HomeOutline />
          </div>
        }
        key="home"
      ></TabPane>
      <TabPane tab="Страницы" key="pages">
        {/* <div className="admin-panel-container" key="pages_1">
          <div className="title">Страница: Разрешите доступ</div>
          <Input
            placeholder="Подписка на рассылку"
            onChange={(e) => onChangeAction(e, "setting")}
            type="text"
            defaultValue={`https://vk.com/public${
              getGroupId[`${NAME_PROJECT}_msgSettingPage`]
            }`}
          />
          <Button type="primary" onClick={() => editLinkGroup("setting")}>
            Изменить
          </Button>
        </div> */}

        <div className="admin-panel-container" key="pages_2">
          <div className="title">Страница: Лайк</div>
          <Input
            placeholder="Подписка на паблик"
            onChange={(e) => onChangeAction(e, "like")}
            type="text"
            defaultValue={`https://vk.com/public${
              getGroupId[`${NAME_PROJECT}_subLikePage`]
            }`}
          />
          <Button type="primary" onClick={() => editLinkGroup("like")}>
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container" key="pages_3">
          <div className="title">Страница: Провожу анализ МУЖЧИНЫ</div>
          <Input
            placeholder="Подписка на рассылку для МЦА"
            onChange={(e) => onChangeAction(e, "search-man")}
            type="text"
            defaultValue={`https://vk.com/public${
              getGroupId[`${NAME_PROJECT}_msgSearchPageMan`]
            }`}
          />
          <Button type="primary" onClick={() => editLinkGroup("search-man")}>
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container" key="pages_4">
          <div className="title">Страница: Провожу анализ ЖЕНЩИНЫ</div>
          <Input
            placeholder="Подписка на рассылку для ЖЦА"
            onChange={(e) => onChangeAction(e, "search-woman")}
            type="text"
            defaultValue={
              getGroupId[`${NAME_PROJECT}_msgSearchPageWoman`]
                ? `https://vk.com/public${
                    getGroupId[`${NAME_PROJECT}_msgSearchPageWoman`]
                  }`
                : "Укажите ссылку"
            }
          />
          <Button type="primary" onClick={() => editLinkGroup("search-woman")}>
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container" key="pages_5">
          <div className="title">Страница: Анализ завершен МУЖЧИНЫ</div>
          <Input
            placeholder="Подписка на паблик для МЦА"
            onChange={(e) => onChangeAction(e, "result-man-sub")}
            type="text"
            defaultValue={
              getGroupId[`${NAME_PROJECT}_subResultPageMan`]
                ? `https://vk.com/public${
                    getGroupId[`${NAME_PROJECT}_subResultPageMan`]
                  }`
                : "Укажите ссылку"
            }
          />
          <Button
            type="primary"
            onClick={() => editLinkGroup("result-man-sub")}
          >
            Изменить
          </Button>
        </div>

        <div className="admin-panel-container" key="pages_6">
          <div className="title">Страница: Анализ завершен ЖЕНЩИНЫ</div>
          <Input
            placeholder="Подписка на паблик для ЖЦА"
            onChange={(e) => onChangeAction(e, "result-woman-sub")}
            type="text"
            defaultValue={
              getGroupId[`${NAME_PROJECT}_subResultPageWoman`]
                ? `https://vk.com/public${
                    getGroupId[`${NAME_PROJECT}_subResultPageWoman`]
                  }`
                : "Укажите ссылку"
            }
          />
          <Button
            type="primary"
            onClick={() => editLinkGroup("result-woman-sub")}
          >
            Изменить
          </Button>
        </div>
        <div className="admin-panel-container last" key="pages_7">
          <div className="title">Ссылка для кнопки Telegram</div>
          <Input
            placeholder="Ссылка для кнопки Telegram"
            onChange={(e) => onChangeAction(e, "link-tg")}
            type="text"
            defaultValue={
              notifyLinks[`${NAME_PROJECT}_linkTelegram`]
                ? `${notifyLinks[`${NAME_PROJECT}_linkTelegram`]}`
                : "Укажите ссылку"
            }
          />
          <Button type="primary" onClick={() => editLinkNotify("link-tg")}>
            Изменить
          </Button>
        </div>
      </TabPane>
      <TabPane tab="Уведомления" key="notify">
        <div className="admin-panel-container" key="title">
          <div className="title">Текст</div>
          <Input
            placeholder="Текст с описанием"
            onChange={(e) => onChangeAction(e, "title")}
            type="text"
            defaultValue={
              notifyLinks[`${NAME_PROJECT}_title`]
                ? `${notifyLinks[`${NAME_PROJECT}_title`]}`
                : "Укажите текст"
            }
          />
          <Button type="primary" onClick={() => editLinkNotify("title")}>
            Изменить
          </Button>
        </div>
        <div className="admin-panel-container" key="link">
          <div className="title">Ссылка для кнопки</div>
          <Input
            placeholder="Ссылка для кнопки"
            onChange={(e) => onChangeAction(e, "link-button")}
            type="text"
            defaultValue={
              notifyLinks[`${NAME_PROJECT}_linkButton`]
                ? `${notifyLinks[`${NAME_PROJECT}_linkButton`]}`
                : "Укажите ссылку"
            }
          />
          <Button type="primary" onClick={() => editLinkNotify("link-button")}>
            Изменить
          </Button>
        </div>
        <div className="admin-panel-container" key="link-img">
          <div className="title">Ссылка на картинку</div>
          <Input
            placeholder="Ссылка на картинку"
            onChange={(e) => onChangeAction(e, "link-img")}
            type="text"
            defaultValue={
              notifyLinks[`${NAME_PROJECT}_linkImg`]
                ? `${notifyLinks[`${NAME_PROJECT}_linkImg`]}`
                : "Укажите ссылку"
            }
          />
          <Button type="primary" onClick={() => editLinkNotify("link-img")}>
            Изменить
          </Button>
        </div>
        <div className="admin-panel-container last" key="text-button-notify">
          <div className="title">Текст кнопки</div>
          <Input
            placeholder="Текст кнопки"
            onChange={(e) => onChangeAction(e, "text-button-notify")}
            type="text"
            defaultValue={
              notifyLinks[`${NAME_PROJECT}_textButtonNotify`]
                ? `${notifyLinks[`${NAME_PROJECT}_textButtonNotify`]}`
                : "Укажите текст кнопки"
            }
          />
          <Button
            type="primary"
            onClick={() => editLinkNotify("text-button-notify")}
          >
            Изменить
          </Button>
        </div>
      </TabPane>
    </Tabs>
  );
};

export { AdminPanelMain };
