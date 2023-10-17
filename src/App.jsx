import "./styles.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 入力した値をステート化 初期値が空文字
  const [todoText, setTodoText] = useState("");

  // 入力した値をステート化 初期値をincompleteTodosに分割代入
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // console.log(incompleteTodos); ["入力値","入力値"]

  // 入力した値をステート化 初期値をcompleteTodosに設定
  const [completeTodos, setCompleteTodos] = useState([]);

  // ステートの内容を変更する処理　入力内容をstateに保持
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンを押した時にステートとして保持
  const onClickAdd = () => {
    //　入力値が空だったら処理はしない
    if (todoText === "") return; //inputが空でも追加ボタンが押せててしまうのを阻止
    // 未完了+inputの値が設定された新しい配列を生成
    const newTodos = [...incompleteTodos, todoText];
    // set関数に新しい配列を設定
    setIncompleteTodos(newTodos);
    // inputの内容をリセット
    setTodoText(""); //　追加ボタンを押した後も入力値が残って見えてしまうので空文字を設定
  };

  // 削除ボタン　渡されたincompleteTodos配列のindexから対象テキストを削除
  const onClickDelete = (index) => {
    // 未完了の参照をコピー
    const newTodos = [...incompleteTodos];
    // 配列から指定のindexを１つ削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    // 新しい未完了の配列は現在の未完了の配列をコピー
    const newIncompleteTodos = [...incompleteTodos];
    // 押された順番の要素を一つ削除
    newIncompleteTodos.splice(index, 1);

    // 完了のTODOと未完了TODOで完了ボタンが押された要素を追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    // 新しい完了の配列は現在の完了の配列をコピー
    const newCompleteTodos = [...completeTodos];
    // 完了リストから削除する処理
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5} //5個以上の時にdisabledを渡す
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録は5個までです。</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
