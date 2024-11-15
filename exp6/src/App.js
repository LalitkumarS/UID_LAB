import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // for animation library
import './App.css'; // External CSS for further custom styling

const ItemForm = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', quantity: 1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.description && form.quantity > 0) {
      setItems([...items, form]);
      setForm({ name: '', description: '', quantity: 1 });
    } else {
      alert('Please fill all fields correctly.');
    }
  };

  return (
    <div className="form-container mx-auto animate__animated animate__fadeIn bg-form rounded-lg shadow-md p-6">
      <h2 className="text-center font-bold mb-4 text-lg text-gray-700">Add New Item</h2>
      
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-sm animate__animated animate__zoomIn">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control custom-input"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter item name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control custom-input"
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter item description"
            rows="2"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control custom-input"
            id="quantity"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            min="1"
            placeholder="Enter quantity"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full custom-button">Add Item</button>
      </form>

      {/* Item List Section */}
      {items.length > 0 && (
        <div className="mt-5 animate__animated animate__fadeInUp">
          <h3 className="text-center mb- text-lg text-gray-500">Item List</h3>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <strong>{item.name}</strong> - {item.description}
                </span>
                <span className="badge bg-primary rounded-pill">
                  {item.quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemForm;
