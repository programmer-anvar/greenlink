import mainCustomer from "../../assets/main-customer/main-customer.jpg";

const MainCustomer = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${mainCustomer})` }}
        className="w-full h-[60vh] flex items-center justify-center"
      >
        <h2 className="text-3xl  text-white">CUSTOMER</h2>
      </div>
      <h2 className="text-2xl text-center my-11">견적문의</h2>

      <div className="container flex items-center gap-8">
        
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md">
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            모드 선택:
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="mode" className="form-radio" value="standard" />
            <span className="ml-2">표준조작모드</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="mode" className="form-radio" value="iot" />
            <span className="ml-2">사물인터넷(IoT)</span>
          </label>
        </div>

        {/* Add other fields similarly with appropriate labels and input types */}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            회사명:
          </label>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        
        {/* Add additional fields */}
        
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            제출
          </button>
        </div>
      </form>
    </div>
      </div>
    </div>
  );
};

export default MainCustomer;
