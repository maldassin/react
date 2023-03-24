import EditEmployee from "./EditEmployee";

function Employee(props) {
  return (
    <div className='m-2 max-w-[300px] space-y-2 rounded-xl bg-trueGray-700 py-8 px-10 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4'>
      <img
        className='mx-auto block h-[100px] w-[100px] rounded-full object-cover sm:mx-0 sm:shrink-0'
        src={props.img}
        alt='Employee'
      />
      <div className='space-y-2 text-center sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg font-semibold text-white'>{props.name}</p>
          <p className='w-full font-medium text-trueGray-300'>{props.role}</p>
        </div>
        <EditEmployee />
      </div>
    </div>
  );
}

export default Employee;
