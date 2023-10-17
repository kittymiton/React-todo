const divStyle = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

const inputStyle = {
  borderRadius: "16px",
  border: "none",
  padding: "6px 16px",
  outline: "none"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={divStyle}>
      <input
        disabled={disabled} //trueかfalseのフラグを受け取る
        style={inputStyle}
        placeholder="TODOを入力"
        value={todoText} //常に空文字が設定される
        onChange={onChange} //inputで変更検知してステートを変更
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
      　
    </div>
  );
};
