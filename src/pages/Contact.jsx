export default function Contact() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="mb-4 text-gray-700">Address: 9088 Main St McKean PA 16426</p>
        <p className="mb-6 text-gray-700">Ph: (346) 221-0112</p>
        <p className="mb-6 text-gray-700">Email: powerndrive@gmail.com</p>
        <form className="grid md:grid-cols-2 gap-4">
          <input className="border rounded-md px-3 py-2" placeholder="Your name" />
          <input className="border rounded-md px-3 py-2" placeholder="Your email" />
          <input className="md:col-span-2 border rounded-md px-3 py-2" placeholder="Subject" />
          <textarea className="md:col-span-2 border rounded-md px-3 py-2" rows="5" placeholder="Message"></textarea>
          <button className="md:col-span-2 px-5 py-3 bg-black text-white rounded-md">Send</button>
        </form>
      </div>
    </section>
  );
}