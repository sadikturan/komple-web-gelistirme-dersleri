function Course(title,instructor ,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

document.getElementById('new-course').addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    // create course object
    const course = new Course(title,instructor,image);


    console.log(course);
    // save to database

    // show on the ui


    e.preventDefault();
});