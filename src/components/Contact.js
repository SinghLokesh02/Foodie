const Contact = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl m-4">Contact Us</h1>

      <form action="">
        <div className="name mx-5 my-3">
        <label htmlFor="name" className="font-bold font-serif">Name : </label>
        <input
          type="text"
          className="bg-gray-300 m-3 px-3 py-2 rounded"
          placeholder="Enter Your Name"
          id="name"
        />
        </div>
        <div className="name mx-5">
        <label htmlFor="email" className="font-bold font-serif">Email : </label>
        <input
          type="email"
          className="bg-gray-300 m-3 px-3 py-2 rounded"
          placeholder="Enter Your Email"
          id="email"
        />
        </div>

        <input type="submit" value="Submit" className=" px-3 py-2 rounded font-serif m-3 font-bold bg-black text-white hover:bg-gray-200 hover:text-black  transition duration-500" />
      </form>
    </div>
  );
};

export default Contact;
