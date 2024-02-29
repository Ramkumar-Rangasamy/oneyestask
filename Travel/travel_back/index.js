const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');



const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const app = express();

app.use(cors());
app.use(fileupload());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection pool
const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "travel_application"
});

// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

/// Mock function to find user by email
async function findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    const selectUserQuery = "SELECT * FROM signuppage WHERE email = ?";
    db.query(selectUserQuery, [email], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.length > 0 ? results[0] : null);
      }
    });
  });
}

//SignUp endpoint
app.post(
  '/signup',
  [
    body('email')
    .notEmpty().withMessage('Email field can\'t be left blank.')
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail().withMessage('Email field can\'t be left blank.')
    .custom(async value => {
      const user = await findUserByEmail(value);
        if (user) {
          throw new Error('E-mail already in use');
        }
    }),

    body('firstname').isLength({ min: 3, max: 20 }).withMessage( `First name field can't be less than 2 characters.`)
    .not().isEmpty().withMessage('First name is required'),
    body('lastname').isLength({ min: 3, max: 10 }).withMessage(`Last name field can't be less than 2 characters.`)
    .not().isEmpty().withMessage('Last name is required'),
    body("password").isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1
    }).withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, firstname, lastname, password } = req.body;

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertUserQuery =
        "INSERT INTO signuppage (email, firstname, lastname, password, status, effectiveFrom, effectiveTo, createdBy, createdOn, modifiedBy, modifiedOn) VALUES (?, ?, ?, ?, 'active', CURRENT_DATE(), '9999-04-05', 'admin', CURRENT_TIMESTAMP(), 'admin', CURRENT_DATE())";

      await db.query(insertUserQuery, [email, firstname, lastname, hashedPassword]);
      return res.status(201).send('User registered successfully');
      
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).send('Internal Server Error');
    }
  }
);

// Login endpoint
app.post('/login', 
[
  body('email').isEmail().normalizeEmail().withMessage('Email field can\'t be left blank.'),
  body('password').isLength({ min: 3, max: 8 }).withMessage('password also  field can\'t be left blank.'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password } = req.body;

  try {
    const query = 'SELECT * FROM signuppage WHERE email = ?';

    db.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const user = results[0];

      try {
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
          return res.status(401).json({ error: 'Invalid password' });
        }

        // Here you can generate and send a JWT token for authentication
        res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        console.error('Error comparing passwords:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//Fights

// Route to handle form submission
app.post('/search', (req, res) => {
  const {
    flight_type,
    selected_option,
    from_where,
    to_where,
    departure_date,
    return_date,
    travellers
  } = req.body;

  // SQL query to insert data into the fsearch table
  const insertQuery = `INSERT INTO fsearch 
  (flight_type, selected_option, from_where, to_where, departure_date, return_date, travellers, status, effectiveFrom, effectiveTo, createdBy, createdOn) 
  VALUES 
  (?, ?, ?, ?, ?, ?, ?, 'active', '2024-02-24', '9999-04-05', 'admin', CURRENT_TIMESTAMP())`;

  const values = [flight_type, selected_option, from_where, to_where, departure_date, return_date, travellers, departure_date];

  // Execute the SQL query
  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      res.status(500).json({ error: 'An internal server error occurred' });
      return;
    }
    console.log('Flight search data inserted successfully');
    res.status(200).json({ message: 'Flight search data inserted successfully' });
  });
});


app.get('/searchdata', (req, res) => {
  // SQL query to select all data from the fsearch table
  const selectQuery = `SELECT * FROM fsearch`;

  // Execute the SQL query
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error retrieving data from database:', err);
      res.status(500).json({ error: 'An internal server error occurred' });
      return;
    }
    console.log('Flight search data retrieved successfully');
    res.status(200).json(results);
  });
});



// Dummy data for fights
let fights = [
  { id: 1, name: 'Airline', date: '2024-03-01', ticketsAvailable: 86, price: 8677.78 },
  { id: 2, name: 'BritishAirways', date: '2024-03-03',  ticketsAvailable: 23,  price: 11200.34 },
  { id: 3, name: 'AirAsia', date: '2024-03-05', ticketsAvailable: 100,  price: 20345.78 },
  { id: 4, name: 'IndiGo', date: '2024-03-10',  ticketsAvailable: 76,  price: 60400.67 },
  { id: 5, name: 'Air India', date: '2024-03-28',  ticketsAvailable: 80,  price: 5670.89 },
  { id: 6, name: 'Singapore Airlines', date: '2024-04-01', ticketsAvailable: 15,  price: 22405.89 },
  
];

// Endpoint to fetch all fights
app.get('/api/fights', (req, res) => {
  res.json(fights);
});

// Endpoint to book a fight
app.post('/api/bookings', (req, res) => {
  const { fightId, tickets } = req.body;
  const fight = fights.find(f => f.id === fightId);
  if (!fight) {
    return res.status(404).json({ error: 'Fight not found' });
  }
  if (tickets > fight.ticketsAvailable) {
    return res.status(400).json({ error: 'Not enough tickets available' });
  }
  // Here you would handle the booking logic, update the database, etc.
  // For simplicity, let's just decrement the available tickets
  fight.ticketsAvailable -= tickets;
  res.json({ success: true });
});








//Packages

// Route to handle form submission
app.post('/psearch', (req, res) => {
  const {
    package_type,
    flight_type,
    selected_option,
    location_from,
    location_to,
    date_from,
    date_to,
    Rooms,
    travellers
  } = req.body;

  // SQL query to insert data into the fsearch table
  const insertQuery = `INSERT INTO packages 
  (package_type, flight_type, selected_option, location_from, location_to, date_from, date_to, Rooms, travellers, status, effectiveFrom, effectiveTo, createdBy, createdOn) 
  VALUES 
  (?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', '2024-02-24', '9999-04-05', 'admin', CURRENT_TIMESTAMP())`;

  const values = [package_type, flight_type, selected_option, location_from, location_to, date_from, date_to, Rooms, travellers];

  // Execute the SQL query
  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      res.status(500).json({ error: 'An internal server error occurred' });
      return;
    }
    console.log('Package search data inserted successfully');
    res.status(200).json({ message: 'Package search data inserted successfully' });
  });
});



let packages = [
  { 
    id: 1, 
    name: 'Chesterfield Hotel & Suites', 
    description: 'Escape to the tranquil beaches for a relaxing vacation.', 
    price: 1500.00, 
    duration: '5 days / 4 nights',
    imageUrl: 'https://photos.hotelbeds.com/giata/bigger/10/107934/107934a_hb_a_009.jpg'
  },
  { 
    id: 2, 
    name: 'Embassy Suites By Hilton Hotel Ft. Lauderdale-17th Street', 
    description: 'Embark on an exciting trekking adventure through breathtaking mountain trails.', 
    price: 2000.00, 
    duration: '7 days / 6 nights',
    imageUrl: 'http://media.staticontent.com/media/pictures/96d45bed-d5a6-4e4b-8e88-818abae710a6'
  },
  { 
    id: 3, 
    name: 'Ocean Sky Hotel And Resort', 
    description: 'Discover the vibrant culture and attractions of a bustling city.', 
    price: 5000.00, 
    duration: '4 days / 3 nights',
    imageUrl: 'http://media.staticontent.com/media/pictures/357161a5-a24a-4db2-b92d-c8d3f9469e49'
  },

  { 
    id: 4, 
    name: 'Hollywood Beach Hotels', 
    description: 'Discover the vibrant culture and attractions of a bustling city.', 
    price: 1000.00, 
    duration: '4 days / 3 nights',
    imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max300/216297469.jpg?k=92e4a1bb155a0a365f9d6465ddce4c224e86db355ba9ae97a25d4000964f2fdb&o='
  },

  { 
    id: 5, 
    name: 'DoubleTree By Hilton Resort Hollywood Beach', 
    description: ' The employees are friendly. I want to thank Kristin for being really helpful and ensuring that we had a good stay.', 
    price: 1200.00, 
    duration: '4 days / 3 nights',
    imageUrl: 'https://www.bonotel.com/binaries/content/gallery/bonotel/hotels/us/fl/hollywood/doubletree-resort-by-hilton-hollywood-beach/gallery/doubletree-resort-by-hilton-hollywood-beach_exterior-2.jpg/doubletree-resort-by-hilton-hollywood-beach_exterior-2.jpg'
  },

  { 
    id: 6, 
    name: 'Element Miami International Airport', 
    description: 'The breakfast was perfect they had enough food and kept bringing out more. The location was just about 10 from all the stores. Overall all I enjoyed this stay will recommend', 
    price: 1200.00, 
    duration: '4 days / 3 nights',
    imageUrl: 'https://i.travelapi.com/lodging/5000000/4350000/4342800/4342714/4adab1e6_z.jpg'
  }

];


// Endpoint to get packages
app.get('/packages', (req, res) => {
  res.json(packages);
});

// Endpoint to get a specific package by ID
app.get('/package/:pkgId', (req, res) => {
  const packageId = parseInt(req.params.pkgId);
  const selectedPackage = packages.find(p => p.id === packageId);
  if (selectedPackage) {
    res.json(selectedPackage);
  } else {
    res.status(404).json({ error: 'Package not found' });
  }
});


// Endpoint to fetch all fights and packages
app.get('/api/fights-and-packages', (req, res) => {
  res.json({ fights, packages });
});







//Hotals bokking 

// Route to handle form submission
app.post('/hsearch', (req, res) => {
  const {
    city,
    checkin,
    checkout,
    room,
    guests
  } = req.body;

  // SQL query to insert data into the fsearch table
  const insertQuery = `INSERT INTO hotels 
  (city, check_in_date, check_out_date, available_rooms,  max_guests, status, effectiveFrom, effectiveTo, createdBy, createdOn) 
  VALUES 
  (?, ?, ?, ?, ?, 'active', '2024-02-24', '9999-04-05', 'admin', CURRENT_TIMESTAMP())`;

  const values = [city, checkin, checkout, room, guests];

  // Execute the SQL query
  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      res.status(500).json({ error: 'An internal server error occurred' });
      return;
    }
    console.log('hotels search data inserted successfully');
    res.status(200).json({ message: 'hotels search data inserted successfully' });
  });
});


const Hotels = [
  {
      id: 1,
      name: "Virgin Hotel",
      city: "New York",
      rating: 4.5,
      price: 150,
      amenities: ["Free Wi-Fi", "Gym", "Restaurant"],
      image: "https://images.ctfassets.net/rxqefefl3t5b/6FY66XaCcxn6FjA5qq4OxP/d827c64f63dd42039b5e5ed936a0c048/220504_Virgin_NY_Model_Rooms_24038.jpg?fl=progressive&q=80"
  },
  {
      id: 2,
      name: "Bon Vivant",
      city: "London",
      rating: 4.2,
      price: 120,
      amenities: ["Free Parking", "Swimming Pool", "Bar"],
      image: "https://bonvivant.co.uk/journal/wp-content/uploads/2013/01/Bamford_Haybarn_Spa_The_Berkeley.jpg"
  },
  {
      id: 3,
      name: "Codee Nast Traveler",
      city: "Paris",
      rating: 4.7,
      price: 180,
      amenities: ["Spa", "Room Service", "Concierge"],
      image: "https://media.cntraveler.com/photos/59efa0c2ae4bf22242a1f7c8/16:9/w_2580,c_limit/Exterior1-PrincedeGalles-Paris-CRHotel.jpg"
  },
  {
      id: 4,
      name: "Truly classy",
      city: "Tokyo",
      rating: 4.6,
      price: 200,
      amenities: ["Business Center", "Fitness Center", "Laundry Service"],
      image: "https://www.trulyclassy.com/wp-content/uploads/2022/07/tokyo-hotels-feature.jpg"
  },
  {
      id: 5,
      name: "Skift",
      city: "Dubai",
      rating: 4.8,
      price: 250,
      amenities: ["Infinity Pool", "Fine Dining", "Spa"],
      image: "https://skift.com/wp-content/uploads/2023/09/Dubai-Hotel-Key-Count-2023-scaled.jpeg"
  },
  {
      id: 6,
      name: "Park Hyatt Sydney",
      city: "Sydney",
      rating: 4.4,
      price: 180,
      amenities: ["Rooftop Bar", "Conference Facilities", "Airport Shuttle"],
      image: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/08/02/1655/Park-Hyatt-Sydney-P115-Exterior-Vertical.jpg/Park-Hyatt-Sydney-P115-Exterior-Vertical.16x9.jpg"
  }
];

// Endpoint to get packages
app.get('/hotellest', (req, res) => {
  res.json(Hotels);
});


// Endpoint to get a specific hotel by ID
app.get('/hotellest/:hotelId', (req, res) => {
  const hotelId = parseInt(req.params.hotelId);
  const hotel = Hotels.find(h => h.id === hotelId);
  if (hotel) {
    res.json(hotel);
  } else {
    res.status(404).json({ error: 'Hotel not found' });
  }
});


app.post('/confirm-booking', 
  [
    // Validate fields using express-validator
    body('firstName').notEmpty().withMessage('Please enter your first name').isString(),
    body('lastName').notEmpty().withMessage('Please enter your last name').isString(),
    body('cardNumber').notEmpty().withMessage('Please enter a valid card number'),
    body('cardHolderName').notEmpty().withMessage('Please enter card holder name').isString().withMessage('Please enter valid card holder name'),
    body('expires').notEmpty().withMessage('Please enter expiry date').isString().withMessage('Please enter valid expiry date'),
    body('cvv').notEmpty().withMessage('Please enter CVV').isInt().withMessage('Please enter valid CVV').isLength({ min: 3, max: 4 }),
    body('address').notEmpty().withMessage('Please enter address').isString().withMessage('Please enter valid address'),
    body('city').notEmpty().withMessage('Please enter city').isString().withMessage('Please enter valid city'),
    body('pincode').notEmpty().withMessage('Please enter zip code').isInt().withMessage('Please enter valid zip code'),
    body('state').notEmpty().withMessage('Please enter state').isString().withMessage('Please enter valid state'),
    body('country').notEmpty().withMessage('Please enter country').isString().withMessage('Please enter valid country'),
    body('email').notEmpty().withMessage('Please enter email').isEmail().withMessage('Please enter valid email'),
    body('phoneNumber').notEmpty().withMessage('Please enter phone number').isMobilePhone().withMessage('Please enter valid phone number')
  ],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { firstName, lastName, cardNumber, cardHolderName, expires, cvv, address, city, pincode, state, country, email, phoneNumber } = req.body;
    
    // Insert the booking details into the database
    const sql = `INSERT INTO hotelformbookings (firstName, lastName, cardNumber, cardHolderName, expires, cvv, address, city, pincode, state, country, email, phoneNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [firstName, lastName, cardNumber, cardHolderName, expires, cvv, address, city, pincode, state, country, email, phoneNumber], (err, result) => {
      if (err) {
        console.error('Error inserting booking:', err);
        res.status(500).send('Error inserting booking');
      } else {
        res.status(200).send('Booking confirmed');
      }
    });
  }
);








app.listen(2001, () => {
  console.log("Server is running on port 2001");
});
