var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment")

var data = [
    {
        name: "Clouds Rest",
        image: "https://farm6.staticflickr.com/5319/7407436246_0ac54dd559.jpg",
        description: "DESCRIPTION THE CENTERPIECE OF THE TOM FORD COLOR COLLECTION. EACH EYE COLOR QUAD IS DESIGNED WITH FOUR OPULENT COMPLEMENTING SHADES THAT ACHIEVE MULTIPLE LOOKS, FROM A BOLD, SMOKEY EYE, TO A SEXY SPLASH OF COLOR AND EVERYTHING BETWEEN. FORMULATED WITH ADVANCED COLOR PROCESSES, THE FOUR LUXURIOUS FINISHES - SHEER SPARKLE, SATIN, SHIMMER AND MATTE - OFFER A SPECTRUM OF INTENSITY AND EFFECTS AND DELIVER INCREDIBLE SHADE FIDELITY AND OUTSTANDING ADHESION. TWO CUSTOM APPLICATORS INCLUDED."
    },
    {
        name: "Desert Mesa",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "DESCRIPTION THE CENTERPIECE OF THE TOM FORD COLOR COLLECTION. EACH EYE COLOR QUAD IS DESIGNED WITH FOUR OPULENT COMPLEMENTING SHADES THAT ACHIEVE MULTIPLE LOOKS, FROM A BOLD, SMOKEY EYE, TO A SEXY SPLASH OF COLOR AND EVERYTHING BETWEEN. FORMULATED WITH ADVANCED COLOR PROCESSES, THE FOUR LUXURIOUS FINISHES - SHEER SPARKLE, SATIN, SHIMMER AND MATTE - OFFER A SPECTRUM OF INTENSITY AND EFFECTS AND DELIVER INCREDIBLE SHADE FIDELITY AND OUTSTANDING ADHESION. TWO CUSTOM APPLICATORS INCLUDED."
    },
    {
        name: "Canyon Floor",
        image: "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg",
        description: "DESCRIPTION THE CENTERPIECE OF THE TOM FORD COLOR COLLECTION. EACH EYE COLOR QUAD IS DESIGNED WITH FOUR OPULENT COMPLEMENTING SHADES THAT ACHIEVE MULTIPLE LOOKS, FROM A BOLD, SMOKEY EYE, TO A SEXY SPLASH OF COLOR AND EVERYTHING BETWEEN. FORMULATED WITH ADVANCED COLOR PROCESSES, THE FOUR LUXURIOUS FINISHES - SHEER SPARKLE, SATIN, SHIMMER AND MATTE - OFFER A SPECTRUM OF INTENSITY AND EFFECTS AND DELIVER INCREDIBLE SHADE FIDELITY AND OUTSTANDING ADHESION. TWO CUSTOM APPLICATORS INCLUDED."
    }
];

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
       if(err) {
           console.log(err);
       } 
       console.log("Removed campgrounds!");
       // add a few campground
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if (err) {
                    console.log(err);
                } else {
                    console.log("CREATED A CAMPGROUND!");
                    // add a few comments
                    Comment.create({
                        text: "I wish there was internet!",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });
    
    // add a few comments
}

module.exports = seedDB;

