import { useState } from 'react';

const ProfileCard = (props: {
    imagepath: string | undefined,
    heading: string | undefined,
    description: string | undefined,

 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="LocationCard">
        <img src={props.imagepath} className="LocationCardImage" alt="Location" />
        <div className="overlay px-5" onClick={toggleModal}>
          {props.heading}
        </div>
      </div>
      {isModalOpen && (
        <div
          id="default-modal"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden w-[full] h-full bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                 {props.heading}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className='flex justify-center'>
                <img src={props.imagepath} className='h-[70%] w-[70%] mx-8 my-6 rounded-lg' />        
              </div>
                
              <div className="p-4 md:p-5 md:px-8 space-y-4">
                <div className='bg-slate-400/25 rounded-lg p-3 mb-4'>
                  <p className="text-base  max-h-[27vh] overflow-scroll leading-relaxed text-gray-500 dark:text-gray-400 mb-2">
                    {props.description}
                </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
