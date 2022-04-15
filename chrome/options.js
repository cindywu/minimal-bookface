// Saves options to chrome.storage
function save_options() {
  var topNavigation = document.getElementById("top-navigation").checked;
  var feedBorders = document.getElementById("feed-borders").checked;
  var noBorders = document.getElementById("borders").checked;
  var noBanner = document.getElementById("no-banner").checked;
  var noNewPostRow = document.getElementById("new-post-row").checked;
  chrome.storage.sync.set(
    {
      topNavigation: topNavigation,
      feedBorders: feedBorders,
      noBorders: noBorders,
      noBanner: noBanner,
      noNewPostRow: noNewPostRow,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function () {
        status.textContent = "";
      }, 750);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(
    {
      topNavigation: false,
      feedBorders: false,
      noBorders: false,
      noBanner: false,
      noNewPostRow: false,
    },
    function (items) {
      document.getElementById("top-navigation").checked = items.topNavigation;
      document.getElementById("feed-borders").checked = items.feedBorders;
      document.getElementById("borders").checked = items.noBorders;
      document.getElementById("new-post-row").checked = items.noNewPostRow;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
