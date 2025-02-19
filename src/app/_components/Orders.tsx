export const Orders = () => {
  return (
    <div
      className="flex m-auto flex-col items-end
"
    >
      <div className="p-6">
        <img src="/Avatar.svg" alt="" className="h-[36px] w-[36px]" />
      </div>
      <div className="w-[1171px] h-[44px] flex justify-between m-auto items-center">
        <div>
          <h1 className="text-[20px]">Orders</h1>
          <p className="text-[#71717A]">32 items</p>
        </div>
        <div className="flex h-[44px] items-center rounded-full gap-[8px]">
          <p className="w-[300px]">13 June 2023 - 14 July 2023</p>
          <p className="bg-[#FAFAFA] rounded-md">Change delivery state</p>
        </div>
      </div>
      <div className="flex justify-between w-[1171px] h-[52px] items-center">
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
