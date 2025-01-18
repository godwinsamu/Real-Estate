const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Toggle Navbar
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active'); // Expand or collapse nav-links
  burger.classList.toggle('toggle'); // Animate burger icon
});
const btns = [
    {
      id:1,
      name:'Land'
    },
    {
      id:2,
      name:'Plot'
    },
    {
      id:3,
      name:'Commercial Plot'
    },
    {
      id:4,
      name:'Residential Plot'
    },
    {
      id:5,
      name:'Houses',
    },
    {
      id:6,
      name:'1BHK',
    },
    {
      id:7,
      name:'2BHK',
    },
    {
      id:8,
      name:'3BHK'
    },
  ]
  const filters = [...new Set(btns.map((btn)=>{
    return btn
  }))]
  document.getElementById('btns').innerHTML = filters.map((btn)=>{
    var{name,id} = btn;
    return(
      "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
    )
  }).join('');

  const product = [
    {
        id:1,
        image:'land1.jpeg',
category:'Land',
location:'Velachery',
price:"2,40,00,000",
Size: '2400 Sqft',
Contact:"91 8015186879"

    },
    {
      id:1,
      image:'land2.jpeg',
category:'Land',
price:"90,00,000",
location:'Tambaram',
Size: '1800 sqft',
Contact:"91 8015186879"
  },
  {
    id:1,
    image:'land3.jpeg',
category:'Land',
price:"3,00,00,000",
location:'Anna Nagar',
Size: '2000 Sqft',
Contact:"91 8015186879"
},
{
  id:1,
  image:'land4.jpeg',
category:'Land',
price:"1,50,00,000",
location:'OMR',
Size: '2500 Sqft',
Contact:"91 8015186879"
},
{
  id:1,
  image:'land5.jpeg',
category:'Land',
price:"4,40,00,000",
location:'T.Nagar',
Size: '2200 sqft',
Contact:"91 8015186879"
},
{
  id:1,
  image:'land6.jpeg',
category:'Land',
price:"1,40,00,000",
location:'Medavakkam',
Size: '2000 sqft',
Contact:"91 8015186879"
},
{
  id:1,
  image:'land7.jpeg',
category:'Land',
price:"2,04,00,000",
location:'Perungudi',
Size: '2400 sqft',
Contact:"91 8015186879"
},
{
  id:1,
  image:'land8.jpeg',
category:'Land',
price:"1,36,50,000",
location:'Porur',
Size: '2100 sqft',
Contact:"91 8015186879"
},
{
  id:1,
  image:'land9.jpeg',
category:'Land',
price:"1,12,50,000",
location:'Ambattur',
Size: '2500 sqft',
Contact:"91 8015186879"
},

    {
      id:1,
      image:'land10.jpeg',
category:'Land',
price:"1,10,00,000",
location:'Madipakkam',
Size: '2000 sqft',
Contact:"91 8015186879"
  },
  {
    id:1,
    image:'land11.jpeg',
category:'Land',
price:"8,40,00,000",
location:'Adayar',
Size: '2800 sqft',
Contact:"91 8015186879"
},

    {
        id:2,
        image:'res1.jpeg',
category:'Plot',
price:"1,20,00,000",
location:'Velachery',
Size:'1200 Sqft',
Contact:"91 8015186879"

    },
    {
      id:2,
      image:'res2.jpeg',
category:'Plot',
price:"75,00,000",
location:'Tambaram',
Size:'1500 Sqft',
Contact:"91 8015186879"

  },
  {
    id:2,
    image:'res3.jpeg',
category:'Plot',
price:"3,00,00,000",
location:'Anna Nagar',
Size:'2000 Sqft',
Contact:"91 8015186879"
},
{
  id:2,
  image:'res4.jpeg',
category:'Plot',
price:"4,80,00,000",
location:'OMR',
Size:'2500 Sqft',
Contact:"91 8015186879"

},
{
  id:2,
  image:'res5.jpeg',
category:'Plot',
price:"15,00,00,000",
location:'T.Nagar',
Size:'3000 Sqft',
Contact:"91 8015186879"

},
{
  id:2,
  image:'res6.jpeg',
category:'Plot',
price:"3,75,00,000",
location:'Medavakkam',
Size:'2500 Sqft',
Contact:"91 8015186879"

},
{
  id:2,
  image:'res7.jpeg',
category:'Plot',
price:"5,40,00,000",
location:'Perungudi',
Size:'3000 Sqft',
Contact:"91 8015186879"

},
{
  id:2,
  image:'res8.jpeg',
category:'Plot',
price:"3,92,00,000",
location:'Porur',
Size:'2800 Sqft',
Contact:"91 8015186879"
},
{
  id:2,
  image:'comm1.jpeg',
category:'Plot',
price:"1,20,00,000",
location:'Velachery',
Size:'1200 Sqft',
Contact:"91 8015186879"

},
{
id:2,
image:'comm2.jpeg',
category:'Plot',
price:"75,00,000",
location:'Tambaram',
Size:'1500 Sqft',
Contact:"91 8015186879"

},
{
id:2,
image:'comm3.jpeg',
category:'Plot',
price:"3,00,00,000",
location:'Anna Nagar',
Size:'2000 Sqft',
Contact:"91 8015186879"

},
{
id:2,
image:'comm4.jpeg',
category:'Plot',
price:"1,50,00,000",
location:'OMR',
Size:'2500 Sqft',
Contact:"91 8015186879"

},
{
id:2,
image:'comm5.jpeg',
category:'Plot',
price:"3,60,00,000",
location:'T.Nagar',
Size:'1800 Sqft',
Contact:"91 8015186879"

},
{
id:2,
image:'comm6.jpeg',
category:'Plot',
price:"1,26,00,000",
location:'Medavakkam',
Size:'1800 Sqft',
Contact:"91 8015186879"

},
{
id:2,
image:'comm7.jpeg',
category:'Plot',
price:"1,04,00,000",
location:'Porur',
Size:'1600 Sqft',
Contact:"91 8015186879"

},

    {
        id:3,
        image:'comm1.jpeg',
category:'Commercial Plot',
price:"1,20,00,000",
location:'Velachery',
Size:'1200 Sqft',
Contact:"91 8015186879"

    },
    {
      id:3,
      image:'comm2.jpeg',
category:'Commercial Plot',
price:"75,00,000",
location:'Tambaram',
Size:'1500 Sqft',
Contact:"91 8015186879"

  },
  {
    id:3,
    image:'comm3.jpeg',
category:'Commercial Plot',
price:"3,00,00,000",
location:'Anna Nagar',
Size:'2000 Sqft',
Contact:"91 8015186879"

},
{
  id:3,
  image:'comm4.jpeg',
category:'Commercial Plot',
price:"1,50,00,000",
location:'OMR',
Size:'2500 Sqft',
Contact:"91 8015186879"

},
{
  id:3,
  image:'comm5.jpeg',
category:'Commercial Plot',
price:"3,60,00,000",
location:'T.Nagar',
Size:'1800 Sqft',
Contact:"91 8015186879"

},
{
  id:3,
  image:'comm6.jpeg',
category:'Commercial Plot',
price:"1,26,00,000",
location:'Medavakkam',
Size:'1800 Sqft',
Contact:"91 8015186879"

},
{
  id:3,
  image:'comm7.jpeg',
category:'Commercial Plot',
price:"1,04,00,000",
location:'Porur',
Size:'1600 Sqft',
Contact:"91 8015186879"

},
{
  id:4,
  image:'res1.jpeg',
category:'Residential Plot',
price:"3,50,00,000",
location:'Ambattur',
Size:'3500 Sqft',
Contact:"91 8015186879"

},
{
id:4,
image:'res2.jpeg',
category:'Residential Plot',
price:"3,84,00,000",
location:'Madipakkam',
Size:'3200 Sqft',
Contact:"91 8015186879"

},
{
id:4,
image:'res3.jpeg',
category:'Residential Plot',
price:"1,20,00,000",
location:'Velachery',
Size:'1200 Sqft',
Contact:"91 8015186879"

},
{
id:4,
image:'res4.jpeg',
category:'Residential Plot',
price:"75,00,000",
location:'Tambaram',
Size:'1500 Sqft',
Contact:"91 8015186879"

},
{
id:4,
image:'res5.jpeg',
category:'Residential Plot',
price:"1,50,00,000",
location:'OMR',
Size:'2500 Sqft',
Contact:"91 8015186879"

},
{
id:4,
image:'res6.jpeg',
category:'Residential Plot',
price:"3,60,00,000",
location:'T.Nagar',
Size:'1800 Sqft',
Contact:"91 8015186879"

},
{
id:4,
image:'res7.jpeg',
category:'Residential Plot',
price:"82,50,000",
location:'Madipakkam',
Size:'3000 Sqft',
Contact:"91 8015186879"

},
{
id:4,
image:'res8.jpeg',
category:'Residential Plot',
price:"1,60,00,000",
location:'Perungudi',
Size:'2000 Sqft',
Contact:"91 8015186879"
},
    {
        id:5,
        image:'house1.jpeg',
category:'Houses',
price:"40,00,000",
location:'Velachery',
Size:'450 Sqft',
Contact:"91 8015186879"
    },
    {
      id:5,
      image:'house2.jpeg',
category:'Houses',
price:"30,00,000",
location:'Tambaram',
Size:'500 Sqft',
Contact:"91 8015186879"
  },
  {
    id:5,
    image:'house3.jpeg',
category:'Houses',
price:"55,00,000",
location:'Anna Nagar',
Size:'3000 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house4.jpeg',
category:'Houses',
price:"35,00,000",
location:'OMR',
Size:'500 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house5.jpeg',
category:'Houses',
price:"60,00,000",
location:'T.Nagar',
Size:'450 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house6.jpeg',
category:'Houses',
price:"45,00,000",
location:'Perungudi',
Size:'520 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house7.jpeg',
category:'Houses',
price:"32,00,000",
location:'Medavakkam',
Size:'480 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house8.jpeg',
category:'Houses',
price:"38,00,000",
location:'Porur',
Size:'500 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house9.jpeg',
category:'Houses',
price:"28,00,000",
location:'Ambattur',
Size:'450 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house10.jpeg',
category:'Houses',
price:"36,00,000",
location:'Madipakkam',
Size:'480 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house11.jpeg',
category:'Houses',
price:"70,00,000",
location:'Velachery',
Size:'850 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house12.jpeg',
category:'Houses',
price:"50,00,000",
location:'Tambaram',
Size:'900 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house13.jpeg',
category:'Houses',
price:"95,00,000",
location:'Anna Nagar',
Size:'1000 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house14.jpeg',
category:'Houses',
price:"65,00,000",
location:'OMR',
Size:'950 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house15.jpeg',
category:'Houses',
price:"1,20,00,000",
location:'T.Nagar',
Size:'850 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house16.jpeg',
category:'Houses',
price:"55,00,000",
location:'Medavakkam',
Size:'900 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house17.jpeg',
category:'Houses',
price:"72,00,000",
location:'Perungudi',
Size:'950 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house18.jpeg',
category:'Houses',
price:"60,00,000",
location:'Porur',
Size:'900 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house19.jpeg',
category:'Houses',
price:"48,00,000",
location:'Ambattur',
Size:'850 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house20.jpeg',
category:'Houses',
price:"58,00,000",
location:'Madipakkam',
Size:'870 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house21.jpeg',
category:'Houses',
price:"1,10,00,000",
location:'Velachery',
Size:'1400 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house22.jpeg',
category:'Houses',
price:"80,00,000",
location:'Tambaram',
Size:'1500 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house23.jpeg',
category:'Houses',
price:"1,80,00,000",
location:'Anna Nagar',
Size:'1600 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house24.jpeg',
category:'Houses',
price:"1,20,00,000",
location:'OMR',
Size:'1450 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house25.jpeg',
category:'Houses',
price:"2,50,00,000",
location:'T.Nagar',
Size:'1500 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house26.jpeg',
category:'Houses',
price:"95,00,000",
location:'Medavakkam',
Size:'3000 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house27.jpeg',
category:'Houses',
price:"1,20,00,000",
location:'Perungudi',
Size:'1500 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house28.jpeg',
category:'Houses',
price:"1,00,00,000",
location:'Porur',
Size:'1480 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house29.jpeg',
category:'Houses',
price:"85,00,000",
location:'Ambattur',
Size:'1450 Sqft',
Contact:"91 8015186879"
},
{
  id:5,
  image:'house30.jpeg',
category:'Houses',
price:"1,05,00,000",
location:'Madipakkam',
Size:'1480 Sqft',
Contact:"91 8015186879"
},
{
  id:6,
  image:'house1.jpeg',
category:'1BHK',
price:"40,00,000",
location:'Velachery',
Size:'450 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house2.jpeg',
category:'1BHK',
price:"30,00,000",
location:'Tambaram',
Size:'500 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house3.jpeg',
category:'1BHK',
price:"55,00,000",
location:'Anna Nagar',
Size:'3000 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house4.jpeg',
category:'1BHK',
price:"35,00,000",
location:'OMR',
Size:'500 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house5.jpeg',
category:'1BHK',
price:"60,00,000",
location:'T.Nagar',
Size:'450 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house6.jpeg',
category:'1BHK',
price:"45,00,000",
location:'Perungudi',
Size:'520 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house7.jpeg',
category:'1BHK',
price:"32,00,000",
location:'Medavakkam',
Size:'480 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house8.jpeg',
category:'1BHK',
price:"38,00,000",
location:'Porur',
Size:'500 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house9.jpeg',
category:'1BHK',
price:"28,00,000",
location:'Ambattur',
Size:'450 Sqft',
Contact:"91 8015186879"
},
{
id:6,
image:'house10.jpeg',
category:'1BHK',
price:"36,00,000",
location:'Madipakkam',
Size:'480 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house11.jpeg',
category:'2BHK',
price:"70,00,000",
location:'Velachery',
Size:'850 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house12.jpeg',
category:'2BHK',
price:"50,00,000",
location:'Tambaram',
Size:'900 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house13.jpeg',
category:'2BHK',
price:"95,00,000",
location:'Anna Nagar',
Size:'1000 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house14.jpeg',
category:'2BHK',
price:"65,00,000",
location:'OMR',
Size:'950 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house15.jpeg',
category:'2BHK',
price:"1,20,00,000",
location:'T.Nagar',
Size:'850 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house16.jpeg',
category:'2BHK',
price:"55,00,000",
location:'Medavakkam',
Size:'900 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house17.jpeg',
category:'2BHK',
price:"72,00,000",
location:'Perungudi',
Size:'950 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house18.jpeg',
category:'2BHK',
price:"60,00,000",
location:'Porur',
Size:'900 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house19.jpeg',
category:'2BHK',
price:"48,00,000",
location:'Ambattur',
Size:'850 Sqft',
Contact:"91 8015186879"
},
{
  id:7,
  image:'house20.jpeg',
category:'2BHK',
price:"58,00,000",
location:'Madipakkam',
Size:'870 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house21.jpeg',
category:'3BHK',
price:"1,10,00,000",
location:'Velachery',
Size:'1400 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house22.jpeg',
category:'3BHK',
price:"80,00,000",
location:'Tambaram',
Size:'1500 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house23.jpeg',
category:'3BHK',
price:"1,80,00,000",
location:'Anna Nagar',
Size:'1600 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house24.jpeg',
category:'3BHK',
price:"1,20,00,000",
location:'OMR',
Size:'1450 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house25.jpeg',
category:'3BHK',
price:"2,50,00,000",
location:'T.Nagar',
Size:'1500 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house26.jpeg',
category:'H3BHK',
price:"95,00,000",
location:'Medavakkam',
Size:'3000 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house27.jpeg',
category:'3BHK',
price:"1,20,00,000",
location:'Perungudi',
Size:'1500 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house28.jpeg',
category:'3BHK',
price:"1,00,00,000",
location:'Porur',
Size:'1480 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house29.jpeg',
category:'3BHK',
price:"85,00,000",
location:'Ambattur',
Size:'1450 Sqft',
Contact:"91 8015186879"
},
{
  id:8,
  image:'house30.jpeg',
category:'3BHK',
price:"1,05,00,000",
location:'Madipakkam',
Size:'1480 Sqft',
Contact:"91 8015186879"
},
  ]

  const categories = [...new Set(product.map((item)=>{
    return item
  }))]

  const filterItems = (a)=>{
    const flterCategories = categories.filter(item);
    function item(value){
      if(value.id==a){
        return(
          value.id
        )
      }
    }
    displayItem(flterCategories);
  }

  const displayItem =  (items)=>{
    document.getElementById('root').innerHTML = items.map((item)=>{
        var {
            image,price,location,Size,Contact
        } = item;
        return(
            `<div class="box"><br><br>
            <div class="img-box">
            <img class="images" src=${image}></img>
            </div>
            <div class="bottom">
            <h2>${location}</h2>
            <h2>${Size}</h2>
            <h2>${price}.00</h2>
            <h2>+${Contact}</h2>
            <button>Book Now</button>
            </div>
            </div>`)
      
    }).join('');
  }
  displayItem(categories);