function addStyles(css) {
  var head = document.querySelector("head");
  var style = document.createElement("style");
  style.textContent = `${css}`;
  head.appendChild(style);
}

chrome.storage.sync.get(
  {
    feedWidth: "600",
    topNavigation: false,
    noTweetButton: false,
    showMessageDrawer: false,
    feedBorders: false,
    noBorders: false,
    noLikes: false,
    noRetweets: false,
    noExploreButton: false,
    noNotificationsButton: false,
    noBookmarksButton: false,
    noListsButton: false,
    noDirectMessageButton: false,
  },
  function (items) {
    if (items.topNavigation === true) {
      addStyles(`
      div[class="DashboardPage-module__welcome___2ChcI"],
      div[class="DashboardPage-module__boxParent___2bwnw"] {
        display: none;
      }
      `);
    }

    if (items.feedBorders === true) {
      addStyles(`
      div[class="post-list-item-comment"] {
        display: none;
      }
      `);
    }

    if (items.noBorders === true) {
      addStyles(`
      div[class="recent-comments"] {
        display: none;
      }
      `);
    }
  }
);






