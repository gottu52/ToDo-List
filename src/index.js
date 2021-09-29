import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値の取得、初期化
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  createIncomp(inputText);
};

// 未完了リストからの削除
const deleteFromIncomp = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncomp = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親クラスの削除
    deleteFromIncomp(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻すボタンの追加、完了ボタンや削除ボタンの削除
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // divタグの子要素に設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストへ追加
    document.getElementById("complete-list").appendChild(addTarget);

    // 戻すボタンのクリックイベント
    backButton.addEventListener("click", () => {
      document.getElementById("complete-list").removeChild(addTarget);
      const text = backButton.parentNode.firstElementChild.innnerText;
      createIncomp(text);
    });
  });

  // button(削除)タグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親クラスの削除
    deleteFromIncomp(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
