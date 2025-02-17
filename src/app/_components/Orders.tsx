export const Orders = () => {
  return (
    <div
      className="flex m-auto flex-col items-end
"
    >
      <div className="p-6">
        <img src="/Avatar.svg" alt="" className="h-[36px] w-[36px] " />
      </div>
      <div className="w-[1171px] h-[44px] flex justify-between m-auto items-center">
        <div>
          <h1>Orders</h1>
          <p>32 items</p>
        </div>
        <div className="flex h-[44px] items-center rounded-full bg-slate-100">
          <p>13 June 2023 - 14 July 2023</p>
          <p>Change delivery state</p>
        </div>
      </div>
    </div>
  );
};
