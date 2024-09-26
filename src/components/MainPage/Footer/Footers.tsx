import './Footers.css';
import globe from '../../../assets/maps1.png';

const Footers = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold  my-8">Contact Us</h1>
        <div className="w-full flex flex-col md:flex-row justify-between">
            <form className="w-full md:w-3/5 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col mb-4">
                        <label className="mb-2">Name*</label>
                        <input type="text" className="p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2">Organization*</label>
                        <input type="text" className="p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2">Email*</label>
                        <input type="email" className="p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2">Phone*</label>
                        <input type="tel" className="p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2">City</label>
                        <input type="text" className="p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2">State</label>
                        <input type="text" className="p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="flex flex-col mb-4 col-span-2">
                        <label className="mb-2">How may we help you?*</label>
                        <textarea className="p-2 border border-gray-300 rounded" required></textarea>
                    </div>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Submit</button>
            </form>

            <div className="w-full md:w-2/5 flex justify-center items-center p-4">
                <img src={globe} className="w-full h-[35rem] object-cover" alt="Map with locations" />
            </div>
        </div>
    <div className="Footer">
        Aesthetix Technologies, LLC © 2024
    </div>
    </div>
   
  );
}

export default Footers;
