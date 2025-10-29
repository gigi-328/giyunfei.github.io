// 本地儲存與日記管理
const input = document.getElementById("diaryInput");
const list = document.getElementById("diaryList");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

// 初始化
window.onload = function() {
  loadDiary();
};

// 儲存日記
saveBtn.onclick = function() {
  const text = input.value.trim();
  if (text === "") return alert("寫點什麼再儲存吧 ✏️");
  const entry = {
    text: text,
    date: new Date().toLocaleString("zh-TW")
  };
  let diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
  diaries.unshift(entry);
  localStorage.setItem("diaries", JSON.stringify(diaries));
  input.value = "";
  loadDiary();
};

// 清除全部日記
clearBtn.onclick = function() {
  if (confirm("確定要刪除所有日記嗎？")) {
    localStorage.removeItem("diaries");
    loadDiary();
  }
};

// 載入日記
function loadDiary() {
  const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
  list.innerHTML = "";
  diaries.forEach((d, i) => {
    const li = document.createElement("li");
    li.className = "diary-entry";
    li.innerHTML = `<strong>${d.date}</strong><br>${d.text}`;
    list.appendChild(li);
  });
}

// 🎵 音樂播放控制
const music = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function() {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸ 暫停音樂";
  } else {
    music.pause();
    musicBtn.textContent = "▶️ 播放音樂";
  }
};
