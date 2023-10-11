FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

const customers = '1'
const location = 'RSA'
let currency = null

if (location == 'RSA') { 
     shipping = 400 
     currency = 'R' }

if (location == 'NAM'){
    shipping = 600 }
 else {shipping = 800}

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 

// shipping = null
// currency = $

if (shoes + batteries + pens + shirts > 1000 && customers == "1"  ) {
    shipping = 0
	if (location == NAM && customers == "1") {
            
			if (location == RSA)
		    shipping = 0 || calcShipping
		}
	}


if (shipping == 0 && customers !== 1) { console.log(FREE_WARNING) }

location == 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

