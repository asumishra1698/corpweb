import "./Item.css";
function Item(props) {
  const name = props.name;
  return <p className="bg-blue-500">{name}</p>;
}
export default Item;
