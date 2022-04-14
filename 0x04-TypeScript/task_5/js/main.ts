interface MajorCredits {
 credits: number;
 _brand: "Major";
}

interface MinorCredits {
 credits: number;
 _brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
 const sum = subject1.credits + subject2.credits;
 const value: MajorCredits = {
  credit: sum,
  _brand: "Major"
};

 return value;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
 const sum = subject1.credits + subject2.credits;
 const value: MinorCredits  = {
  credit: sum,
  _brand: "Minor",
};
return value;
}