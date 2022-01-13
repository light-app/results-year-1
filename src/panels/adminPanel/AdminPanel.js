import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { AdminPanelMain } from "/";
import { NAME_PROJECT, NAME_PROJECT_LOWER_CASE } from "../../constants";

const AdminPanel = ({
  openAlert,
  snackbar,
  getButtonStats,
  getPlatform,
  getGroupId,
  notifyLinks,
}) => {
  const [settingGroupMailingId, setSettingGroupMailingId] = useState("");
  const [likeAddedGroupId, setLikeAddedGroupId] = useState("");
  const [searchManGroupMailingId, setSearchManGroupMailingId] = useState("");
  const [searchWomanGroupMailingId, setSearchWomanGroupMailingId] =
    useState("");
  const [resultWomanGroupSubId, setResultWomanGroupSubId] = useState("");
  const [resultManGroupSubId, setResultManGroupSubId] = useState("");
  const [appID, setAppID] = useState("");
  const [title, setTitle] = useState("");
  const [linkButton, setLinkButton] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [linkTelegram, setLinkTelegram] = useState("");
  const [textButtonNotify, setTextButtonNotify] = useState("");

  // useEffect(() => {
  //   ["links.results-year_title", "linksresults-year_title", "test"].forEach(
  //     (item) => {
  //       axios
  //         .post("https://top1bot.ru/app-notify/delete", {
  //           key: item,
  //         })
  //         .then(function (response) {
  //           openAlert(`Вы удалили элемент ${item}`, "red");
  //         })
  //         .catch(function (error) {});
  //     }
  //   );
  // });

  const typeLink = {
    setting: settingGroupMailingId,
    like: likeAddedGroupId,
    "search-man": searchManGroupMailingId,
    "search-woman": searchWomanGroupMailingId,
    "result-woman-sub": resultWomanGroupSubId,
    "result-man-sub": resultManGroupSubId,
    "app-id": appID,
  };

  const typeLinkNotify = {
    title: title,
    "link-button": linkButton,
    "link-img": linkImg,
    "link-tg": linkTelegram,
    "text-button-notify": textButtonNotify,
  };

  const typeLinkKey = {
    setting: `links.${NAME_PROJECT}_msgSettingPage`,
    like: `links.${NAME_PROJECT}_subLikePage`,
    "search-man": `links.${NAME_PROJECT}_msgSearchPageMan`,
    "search-woman": `links.${NAME_PROJECT}_msgSearchPageWoman`,
    "result-man-sub": `links.${NAME_PROJECT}_subResultPageMan`,
    "result-woman-sub": `links.${NAME_PROJECT}_subResultPageWoman`,
    "app-id": `links${NAME_PROJECT}_.appID`,
  };

  const typeLinkKeyNotify = {
    title: `${NAME_PROJECT}_title`,
    "link-button": `${NAME_PROJECT}_linkButton`,
    "link-img": `${NAME_PROJECT}_linkImg`,
    "link-tg": `${NAME_PROJECT}_linkTelegram`,
    "text-button-notify": `${NAME_PROJECT}_textButtonNotify`,
  };

  function editLinkGroup(type) {
    axios
      .post("https://ods-studio.ru/app-statistics/edit", {
        key: typeLinkKey[type],
        value: typeLink[type],
      })
      .then(function (response) {
        if (response.data === "ok") {
          openAlert(
            type === "app-id"
              ? "Вы успешно изменили ссылку на приложение"
              : "Вы успешно изменили ссылку на группу"
          );
        } else {
          openAlert("Вы указали невалидную ссылку", "red");
        }
      })
      .catch(function (error) {});
  }

  function editLinkNotify(type) {
    axios
      .post("https://top1bot.ru/app-notify/edit", {
        key: typeLinkKeyNotify[type],
        value: typeLinkNotify[type],
      })
      .then(function (response) {
        openAlert("Вы успешно внесли изменения");
      })
      .catch(function (error) {});
  }

  function onChangeAction(e, type) {
    const value = e.target.value.trim();

    switch (type) {
      case "setting":
        setSettingGroupMailingId(value);
        break;
      case "like":
        setLikeAddedGroupId(value);
        break;
      case "search-man":
        setSearchManGroupMailingId(value);
        break;
      case "search-woman":
        setSearchWomanGroupMailingId(value);
        break;
      case "result-woman-sub":
        setResultWomanGroupSubId(value);
        break;
      case "result-man-sub":
        setResultManGroupSubId(value);
        break;
      case "app-id":
        setAppID(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "link-button":
        setLinkButton(value);
        break;
      case "link-img":
        setLinkImg(value);
        break;
      case "link-tg":
        setLinkTelegram(value);
        break;
      case "text-button-notify":
        setTextButtonNotify(value);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <AdminPanelMain
        onChangeAction={onChangeAction}
        editLinkGroup={editLinkGroup}
        getButtonStats={getButtonStats}
        getPlatform={getPlatform}
        getGroupId={getGroupId}
        notifyLinks={notifyLinks}
        editLinkNotify={editLinkNotify}
      />
      {snackbar}
    </div>
  );
};

export { AdminPanel };
