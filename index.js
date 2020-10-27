function wakeDog(dogName, dogBreed) {
    const announcement = `Wake ${dogName} the ${dogBreed}`
    console.log(announcement);
    return announcement
  }

  function leashDog(dogName, dogBreed) {
    const announcement = `Leash ${dogName} the ${dogBreed}`
    console.log(announcement);
    return announcement
  }

  function walkToPark(dogName, dogBreed) {
    const announcement = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(announcement);
    return announcement
  }

  function throwFrisbee(dogName, dogBreed) {
    const announcement = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(announcement);
    return announcement
  }

  function walkHome(dogName, dogBreed) {
    const announcement = `Walk home with ${dogName} the ${dogBreed}`
    console.log(announcement);
    return announcement
  }

  function unleashDog(dogName, dogBreed) {
    const announcement = `Unleash ${dogName} the ${dogBreed}`
    console.log(announcement);
    return announcement
  }

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

  function exerciseDog(dogName, dogBreed) {
      let output = [];
      for (let i = 0; i < routine.length; i++) {
          output.push(routine[i](dogName, dogBreed));
      }
    return output;
  }