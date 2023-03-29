function Employee(props) {
  return (
    <div className='mx-4 my-3 flex min-w-[240px] max-w-[350px] grow flex-wrap justify-center space-y-2 rounded-xl bg-gray-700 px-1 py-2 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4'>
      <img
        className='block h-[100px] w-[100px] rounded-full object-cover sm:mx-0 sm:shrink-0'
        src={props.img}
        alt='Employee'
      />
      <div className='space-y-2 text-center sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg font-semibold text-white'>{props.name}</p>
          <p className='min-w-[150px] max-w-[150px] font-medium text-trueGray-300'>
            {props.role}
          </p>
        </div>
        {props.editEmployee}
      </div>
    </div>
  );
}

export default Employee;
