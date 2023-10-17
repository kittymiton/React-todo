const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {/* incompleteTodosに基づいたレンダリング処理 map関数は引数に配列の中身が入ってくる */}
        {/* るーぷしてレンダリング処理の中で何番目家を指定する場合indexを指定し関数に渡す */}
        {todos.map((todo, index) => {
          /* 各todoのJSXを呼び出し、returnで元のmap関数に返す　　*/
          /* console.log(todo);　section1, section2　*/
          return (
            /* ループ内の親タグにkeyを設定する */
            <div key={todo} className="list-row">
              {/* 配列の中身を順番に入れていきたいのは<li> */}
              <li>{todo}</li>
              <div>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 関数に引数を渡す場合は直接書くのではなくアロー内で関数を生成する必要がある */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
