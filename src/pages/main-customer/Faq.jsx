import mainCustomer from "../../assets/main-customer/main-customer.jpg";
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const Faq = () => {
  return (
    <div>
      <div
              style={{ backgroundImage: `url(${mainCustomer})` }}
              className="w-full h-[60vh] flex items-center justify-center"
            >
              <h2 className="text-3xl  text-white">CUSTOMER</h2>
            </div>

            <div className="container">
                <h2 className="text-center text-3xl my-7">FAQ</h2>

                <Collapse items={items} defaultActiveKey={['1']}  />
            </div>
    </div>
  )
}

export default Faq
