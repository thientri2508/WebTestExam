
import ProvinceList from "../components/ProvinceList"
import SearchProvince from "../components/SearchProvince"


const Test = () => {
  

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 border-solid border-2 p-10"><ProvinceList></ProvinceList></div>
      <div className="col-span-1 border-solid border-2 p-10"><SearchProvince></SearchProvince></div>
    </div>
  )
}

export default Test