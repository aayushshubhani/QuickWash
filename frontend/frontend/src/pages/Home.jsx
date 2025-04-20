import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-indigo-800 via-purple-700 to-violet-700 text-white px-6 py-12">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4 tracking-wide text-center">Welcome to QuickWash</h1>
          <p className="mb-8 text-lg text-violet-200 text-center">Fast, clean, and reliable laundry services</p>

          {/* Introduction Section */}
          <div className="text-center mb-12">
            <motion.div
              className="flex justify-center items-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="https://cdn.cpdonline.co.uk/wp-content/uploads/2023/05/10163630/Setting-up-a-Laundry-Business-1.jpg" // Replace with your actual image URL
                alt="Laundry"
                className="rounded-lg shadow-xl w-80 h-80 object-cover"
              />
            </motion.div>
            <div className="mt-6 max-w-4xl mx-auto">
              <p className="text-lg">
                At Quickwash Laundry, we believe in making your laundry experience as simple, fast, and efficient as possible.
                In today’s busy world, time is valuable, and we’re here to help you save it. Whether you're a customer looking
                for convenient laundry services or a staff member managing orders, our innovative platform offers a seamless
                experience for all.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <motion.div
            className="mb-12"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-2xl font-semibold text-center text-violet-100">Our Mission</h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg mt-4">
                We aim to revolutionize the way laundry services are experienced, combining cutting-edge technology with exceptional customer service.
                Our intuitive web platform provides customers with the ability to place orders with just a few clicks, track progress, and manage
                their laundry needs in real-time. For staff, our system ensures smooth order management and efficient status updates, all with a user-friendly interface.
              </p>
            </div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Convenience</h3>
              <p>
                Place your laundry order online, anytime, anywhere. Our platform is designed for ease of use, allowing you to quickly add clothes, select services, and track your order.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Real-Time Updates</h3>
              <p>
                Get live updates on your order status. Whether your clothes are being washed, dried, or folded, you’ll know exactly where they stand.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Professional Service</h3>
              <p>
                With our dedicated staff, we ensure that your clothes are handled with care and cleaned to perfection.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Customizable Options</h3>
              <p>
                Choose from a range of laundry services and adjust your order according to your preferences. Whether it's delicate fabrics or a bulk order, we’ve got you covered.
              </p>
            </div>
          </motion.div>

          {/* Targeted Sections */}
          <div className="text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="https://tumbledry.in/wp-content/uploads/2022/02/Colorful-Laundry-Clothes.jpg" // Replace with your actual image URL
                alt="Service"
                className="rounded-lg shadow-xl w-72 h-72 object-cover mx-auto"
              />
            </motion.div>
            <h3 className="text-2xl font-semibold mt-4 text-indigo-100">For Our Customers</h3>
            <p className="mt-2 text-lg">
              Quickwash isn’t just a laundry service; it’s a partnership designed to meet your unique needs. Easily place and manage your orders, check the status, and enjoy fast turnaround times—all from the comfort of your home or on-the-go.
            </p>
          </div>

          <div className="text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="https://t4.ftcdn.net/jpg/06/18/84/35/360_F_618843537_WQybY3VrQAfrsqyJ0kpR4L4IrBbeVrzP.jpg" // Replace with your actual image URL
                alt="Staff"
                className="rounded-lg shadow-xl w-72 h-72 object-cover mx-auto"
              />
            </motion.div>
            <h3 className="text-2xl font-semibold mt-4 text-indigo-100">For Our Staff</h3>
            <p className="mt-2 text-lg">
              Our platform empowers staff members to efficiently manage orders, update statuses, and maintain smooth operations. With Quickwash, staff can focus on delivering high-quality service without worrying about the technical details.
            </p>
          </div>

          <p className="text-lg font-semibold mt-8 text-center">Get Started Now and Let Us Handle the Rest!</p>
        </motion.div>
      </main>

      
    </div>
  );
}

export default Home;
