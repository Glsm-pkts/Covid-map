
const InfoCard = ({item}) => {
    console.log(item);
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-gray-600 shadow-md">
{/**split ve join kelimeler arasındaki alt çizgileri kaldırır con_diff con dif gibi */}
      <p className="text-sm font-semibold mb-2 capitalize">{item[0].split("_").join(" ")}</p>
      <h2 className="text-lg font-bold text-gray-800">{item[1]}</h2>
    </div>
  );
}

export default InfoCard;
