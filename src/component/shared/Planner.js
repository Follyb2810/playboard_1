// PlannerForm.js

import { useState } from 'react';
import axios from 'axios';

const PlannerForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    slots: {
      slot1: '',
      slot2: '',
      slot3: '',
      slot4: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSlotChange = (slotName, slotValue) => {
    setFormData({
      ...formData,
      slots: {
        ...formData.slots,
        [slotName]: slotValue,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/planner', formData);
      console.log(response.data);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error creating planner:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <label>Slot 1:</label>
      <input type="text" name="slot1" value={formData.slots.slot1} onChange={(e) => handleSlotChange('slot1', e.target.value)} />

      <label>Slot 2:</label>
      <input type="text" name="slot2" value={formData.slots.slot2} onChange={(e) => handleSlotChange('slot2', e.target.value)} />

      <label>Slot 3:</label>
      <input type="text" name="slot3" value={formData.slots.slot3} onChange={(e) => handleSlotChange('slot3', e.target.value)} />

      <label>Slot 4:</label>
      <input type="text" name="slot4" value={formData.slots.slot4} onChange={(e) => handleSlotChange('slot4', e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default PlannerForm;
