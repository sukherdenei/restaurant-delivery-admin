export const Orders = () => {
  return (
    <div
      className="flex flex-col items-end w-[1171px] m-5
"
    >
      <div className="p-5">
        <img src="/Avatar.svg" alt="" className="h-[36px] w-[36px]" />
      </div>
      <div className="w-[1171px] h-[76px] flex justify-between items-center border-[1px]">
        <div>
          <h1 className="text-[20px] w-[193px] h-[28px]">Orders</h1>
          <p className="text-[#71717A]">32 items</p>
        </div>
        <div className="flex h-[44px] items-center rounded-full gap-[8px]">
          <p className="w-[300px] h-[36px] flex items-center border-[1px] rounded-xl p-2">
            13 June 2023 - 14 July 2023
          </p>
          <p className="bg-[silver] rounded-md w-[179px] h-[36px] items-center flex justify-center">
            Change delivery state
          </p>
        </div>
      </div>
      <div className="flex justify-between w-[1171px] h-[52px] items-center border-[1px]">
        <input type="checkbox" />
        <p>№</p>
        <p>№ Customer</p>
        <p>Food</p>
        <p>Date</p>
        <img src="/updown.svg" alt="" />
        <p>Total</p>
        <p>Delivery Address</p>
        <p>Delivery state</p>
        <img src="/updown.svg" alt="" />
      </div>
    </div>
  );
};
