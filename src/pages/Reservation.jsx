import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import s from "./Reservation.module.scss";

export const Reservation = () => {
  const {
    data: destinations,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    roomType: "",
    guests: "1",
    priceClass: "normal",
    checkIn: "",
    checkOut: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
    acceptedTerms: false,
  });

  useEffect(() => {
    console.log("Raw API response:", destinations);
  }, [destinations]);

  // Get hotels for selected destination
  const destinationHotels =
    destinations
      ?.find((d) => d.slug === selectedDestination)
      ?.cities?.flatMap((city) => city.hotels) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log("Form submitted:", formData);
  };

  if (loading) return <div>Loading form data...</div>;
  if (error) return <div>Error loading form: {error}</div>;

  return (
    <div className={s.reservationForm}>
      <h2>Reservation</h2>
      <form onSubmit={handleSubmit}>
        {/* Destination & Hotel Selection */}
        <div className={s.formGroup}>
          <label>Vælg destination & hotel:</label>
          <div className={s.dropdownGroup}>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              required
            >
              <option value="">Vælg destination</option>
              {destinations?.map((dest) => (
                <option key={dest.id} value={dest.slug}>
                  {dest.name}
                </option>
              ))}
            </select>

            <select
              value={selectedHotel}
              onChange={(e) => setSelectedHotel(e.target.value)}
              required
              disabled={!selectedDestination}
            >
              <option value="">Vælg hotel</option>
              {destinationHotels?.map((hotel) => (
                <option key={hotel.id} value={hotel.slug}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Room Type */}
        <div className={s.formGroup}>
          <label>Vælg værelsestype:</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={(e) =>
              setFormData({ ...formData, roomType: e.target.value })
            }
            required
          >
            <option value="">Vælg type</option>
            <option value="standard">Standard</option>
            <option value="superior">Superior</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        {/* Guests and Price Class */}
        <div className={s.formRow}>
          <div className={s.formGroup}>
            <label>Vælg antal personer:</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={(e) =>
                setFormData({ ...formData, guests: e.target.value })
              }
              required
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num} person{num > 1 ? "er" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className={s.formGroup}>
            <label>Vælg prisklasse:</label>
            <div className={s.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="priceClass"
                  value="normal"
                  checked={formData.priceClass === "normal"}
                  onChange={() =>
                    setFormData({ ...formData, priceClass: "normal" })
                  }
                  required
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  name="priceClass"
                  value="flex"
                  checked={formData.priceClass === "flex"}
                  onChange={() =>
                    setFormData({ ...formData, priceClass: "flex" })
                  }
                />
                Flex
              </label>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className={s.formRow}>
          <div className={s.formGroup}>
            <label>Check-in dato:</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={(e) =>
                setFormData({ ...formData, checkIn: e.target.value })
              }
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>Check-out dato:</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={(e) =>
                setFormData({ ...formData, checkOut: e.target.value })
              }
              required
            />
          </div>
        </div>

        {/* Personal Information */}
        <div className={s.formRow}>
          <div className={s.formGroup}>
            <label>Fornavn:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>Efternavn(e):</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className={s.formRow}>
          <div className={s.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className={s.formGroup}>
            <label>Telefon:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>
        </div>

        {/* Comments */}
        <div className={s.formGroup}>
          <label>Kommentarer:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={(e) =>
              setFormData({ ...formData, comments: e.target.value })
            }
          />
        </div>

        {/* Terms */}
        <div className={s.formGroup} terms>
          <label>
            <input
              type="checkbox"
              checked={formData.acceptedTerms}
              onChange={(e) =>
                setFormData({ ...formData, acceptedTerms: e.target.checked })
              }
              required
            />
            Jeg accepterer hermed Overlooks betingelser (sæt kryds)
          </label>
        </div>

        {/* Buttons */}
        <div className={s.formButtons}>
          <button type="submit">Send reservation</button>
          <button type="button" className={s.cancel}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};
