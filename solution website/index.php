<?php
include "config.php" ;


if (isset($_POST['send'])) {
    
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['sub'];
    $message=$_POST['message'];


    $sql="INSERT INTO `messages`( `name`, `email`, `subject`, `message`) VALUES ('$name','$email','$subject','$message')" ;
    
    $result=$conn->query($sql);

    if ($result) {
              
      ?>
      <script>
          alert("data recorded ");
      </script>
      <?php
      header('location:index.php');
        
    }else {
       echo 'failed' ;
    }
   


}


?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/solution.css">
    <title>Document</title>
   </head>



<body data-aos-easing="ease-in-out" data-aos-duration="2000">
    <header class="fixed-top d-flex header-scrolled" >
        <div class="container d-flex justify-content-between align-items-center">
            <h1 class=""><a href="" class="brand-name text-white">SOLUTION</a></h1>

                <ul class="navbar nav navbar-expand  ml-auto ">
                    <li class="nav-item"><a href="" class="nav-link fs-6 text-white active">Home</a></li>
                    <li class="nav-item"><a href="" class="nav-link fs-6 text-white">About</a></li>
                    <li class="nav-item"><a href="services.php" class="nav-link fs-6 text-white">Services</a></li>
                    <li class="nav-item"><a href="login.php" class="nav-link fs-6 text-white">Sign in</a></li>
                    <li class="nav-item"><a href="" class="nav-link fs-6 text-white">Contact</a></li>
                    <a href="" class="btn text-white get-btn border p-2 rounded-pill ">Get Started</a>

                </ul>
            
        </div>
    </header>
    

 <section id="first" class="w-100 d-flex align-items-center">
    <div class="container d-flex container-content  align-items-center pt-5 ">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center col-md-12"  data-aos="fade-up"   data-aos-duration="1000" >
                <h1 class="text-white fw-bold h1 fs-sm-5">Better Solutions For your buisness</h1>
                <div class="h4 fs-5 text-grey fs-sm-6">We are team of talented designers making websites to make you grow your buisness </div>
                <div class="links d-flex align-items-center mt-4 ">
                    <a href="" class="btn btn-primary border rounded-pill fs-5">Get Started</a>
                    <a href="" class="text-white btn-watch-video fs-lg-4 fs-sm-6">
                         <i class="bi bi-play-circle fs-2" ></i>
                        <span class="fs-4">Watch video</span>
                    </a>

                </div>
            </div>
            <div class="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-duration="2000" >
                <img src="img/hero-img.png" alt="" class="img-fluid animated first-img " >
            </div>
        </div>
    </div>
 </section>


 <section id="marks">
    <div class="container d-flex aos-init " data-aos="zoom-in"  data-aos-duration="2000" data-aos-delay="900" >
        <div class="row">
            <div class="col-2 d-flex align-items-center justify-content-center">
                <img src="img/clients/client-1.png" alt="">
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center ">
                <img src="img/clients/client-2.png " alt="">
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
                <img src="img/clients/client-3.png " alt="">
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
                <img src="img/clients/client-4.png" alt="">
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
                <img src="img/clients/client-5.png" alt="">
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
                <img src="img/clients/client-6.png" alt="">
            </div>
                
           
        </div>
    </div>
 </section>


 <section id="about" class="about">
       <div class="container pt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
          <div class="row">
            <h1 class="section-title fw-bold d-flex align-items-center justify-content-center">ABOUT US</h1>
          </div>
         <div class="row pt-3">
             <div class="col-lg-6 col-md-12" data-aos="fade-right"  data-aos-duration="1500" >
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore. Vel fuga voluptatem dolorum reprehenderit quaerat ex sit, minus, temporibus porro consequatur repudiandae ad animi repellat. Ad nostrum harum nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos, voluptatem molestiae maxime libero iusto.</p>
             </div>
             <div class="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="1500" >
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui non eius libero rem illum error magni at veritatis omnis!</p>
                 <a href="#" class="btn btn-outline-primary">Learn more</a>
             </div>
         </div>
       </div>
 </section>


 <section class="content" id="content">
    <div class="container d-flex align-items-stretch pt-5 pb-5" data-aos="fade-up" data-aos-duration="1500">
        <div class="row mt-4 mb-5 ">
            <div class="col-lg-7 col-sm-12">
                <h1 class="title">Lorem ipsum dolor sit, amet consectetur adip</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatibus nostrum dolores in. Tempore, necessitatibus? Consequatur omnis facere ratione aliquam reiciendis temporibus accusantium.</p>
                <div class="d-flex flex-column" id="accordion">
                    <button class=" p-3 btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#panneau1"><span class="p-4 me-auto">01</span> Lorem ipsum dolor sit am.
                        <i class="bx bx-chevron-down icon-show"></i>
                    </button>
                    <section class="collapse p-3" id="panneau1" data-bs-parent="#accordion">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis vero mollitia nesciunt ratione recusandae animi aliquid eius beatae dolore odit? Minus voluptatum illo non perspiciatis eveniet.</p>
                    </section>
                    <button class="p-3 btn-outline-primary mt-2 mb-2" data-bs-toggle="collapse" data-bs-target="#panneau2"><span class="p-4">02</span> Lorem ipsum dolor sit.</button>
                    <section class="collapse p-3" id="panneau2" data-bs-parent="#accordion">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis vero mollitia nesciunt ratione recusandae animi aliquid eius beatae dolore odit? Minus voluptatum illo non perspiciatis eveniet.</p>
                    </section>
                    <button class="p-3 btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#panneau3"><span class="p-4">03</span>Lorem, ipsum dolor.</button>
                    <section class="collapse p-3" id="panneau3" data-bs-parent="#accordion">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis vero mollitia nesciunt ratione recusandae animi aliquid eius beatae dolore odit? Minus voluptatum illo non perspiciatis eveniet.</p>
                    </section>
                </div>
            </div>
            <div class="col-lg-5 col-sm-12 image" style="background-image: url('./img/why-us.png'); background-repeat: no-repeat; background-size: cover;" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
               
            </div>
        </div>
    </div>
 </section>


 <section id="skills" class="skills">
  <div class="container"  data-aos="fade-up"  data-aos-duration="1500" >
  <div class="row">
    <div class="col-lg-6 col-sm-12 d-flex align-items-center " data-aos="fade-right"  data-aos-duration="1500">
        <img src="./img/skills.png" alt="" class="img-fluid">
    </div>
    <div class="col-lg-6 col-sm-12 d-flex flex-column " data-aos="fade-left"  data-aos-duration="1500">
        <h1 class="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium inventore eaque nesciunt at tenetur.</p>
        <div class="skill-content">
            <div class="progress d-flex flex-column">
                <span class="skill">
                Bootstrap
                <i class="num">100%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" ></div>
                </div>
            </div>
            <div class="progress d-flex flex-column">
                <span class="skill">
                javascript
                <i class="num ">90%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar bar-1" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:90%;" ></div>
                </div>
            </div>
            <div class="progress d-flex flex-column">
                <span class="skill">
                php
                <i class="num">80%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar bar-2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 80%;" ></div>
                </div>
            </div>
        </div>

    </div>
  </div>
  </div>
  </section>


<section id="services" class="services mb-4"  style="overflow:hidden">
  <div class="container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" style="overflow:hidden">
      <div class="row">
          <div class="title  d-flex flex-column justify-content-center align-items-center">
            <h1 class="service-title">Services</h1>
            <div class="blue-line"></div>
            <p class="text-dark" style="text-align: center;">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam a nemo itaque, architecto consectetur? adipisicing elit. Nihil eos reprehenderit vero illo voluptatem exercitationem!</p>
          </div>
      </div>
      <div class="row  d-flex justify-content-center">
          <div class="col-lg-3 col-md-6 col-sm-12 service-box d-flex flex-column align-items-stretch justify-content-center ">
              <div class="icon-box" data-aos="zoom-in" data-aos-delay="500">
                  <i class="bx bxl-dribbble"></i>
                  <h4 class="mb-4">Web design</h4>
                  <p style="font-size: .9rem;" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam?</p>
                </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 service-box d-flex flex-column align-items-stretch justify-content-center ">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="700">
                <i class="bx bxl-dribbble"></i>
                <h4 class="mb-4">Mobile dev</h4>
                <p style="font-size: .9rem;" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam?</p>
              </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 service-box d-flex flex-column align-items-stretch justify-content-center ">
            <div class="icon-box"data-aos="fade-up" data-aos-delay="900">
                <i class="bx bxl-dribbble"></i>
                <h4 class="mb-4">Web dev</h4>
                <p style="font-size: .9rem;" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam?</p>
              </div>
        </div>
        
      </div>
      <div class="row">
          <div class="col-12 d-flex justify-content-center align-items-center">
          <a href="services.php" class="btn btn-primary px-4 border rounded-pill text-white">All services</a>
          </div>
      </div>

  </div>
</section>


<section class="action mb-5 ">
    <div class="container ">
        <div class="row">
            <div class="col-lg-8 col-sm-12 d-flex align-items-center justify-content-end">
                <div class="call-action" data-aos="fade-right" data-aos-duration="1500">
                    <h1>call to action</h1>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti quidem nobis ipsa placeat minima similique.</p>
                </div>
            </div>
            <div class="col-lg-4 d-flex align-items-center justify-content-center">
                <div class="call-button rounded-pill w-50 text-center "data-aos="fade-left" data-aos-duration="1500">
                    <a href="" class="align-middle">call to action</a>
                </div>
            </div>
        </div>      
        
        
        
        
        
    </div>
</section>

<!-- ======= Team Section ======= -->
<section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src="img/team/team-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div class="pic"><img src="img/team/team-2.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div class="pic"><img src="img/team/team-3.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src="img/team/team-4.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
</section><!-- End Team Section -->




















<section class="contact mt-5" data-aos="fade-up" data-aos-duration="1500">
<h1 class="text-center">Contact</h1>
<div class="blue-line mx-auto"></div>

<div class="conatiner  d-flex align-items-center justify-content-center">

    <div class="row ">
        <!--Adress-->
        <div class="col-lg-4 col-sm-12 d-flex adress align-items-stretch">
            <div class="info">
                <div class="location mb-5">
                    <i class="bi bi-geo-alt" style="float: left;"></i>
                    <h4>Location:</h4>
                    <p>Rue soukra 35 2036 dar fadhal 503644</p>
                </div>
                <div class="call mb-5">
                    <i class="bi bi-phone" style="float: left;"></i>
                    <h4>call:</h4>
                    <p>54 961 935 / 71 555 842 / 94 547 355</p>
                </div>
                <div class="mail mb-5">
                    <i class="bi bi-envelope" style="float: left;"></i>
                    <h4>Email:</h4>
                    <p>mahdihammi12@gmail.com</p>
                </div>
            </div>
            
        </div>

       <!--form-->
        <div class="col-lg-7 col-sm-12 form-box d-flex align-items-stretch" >
            <form action="" method="POST">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Your Name</label>
                            <input class="form-control" name="name" type="text" required>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Your Email</label>
                            <input class="form-control" name="email" type="email" required>
                        </div>
                    </div>
                    
                </div>
               <div class="form-group">
                   <label for="">Subject</label>
                   <input class="form-control" name="sub" type="text">
               </div>
               <div class="form-group">
                <label for="">Subject</label>
                <textarea  class="form-control" name="message" id="" cols="30" rows="10"></textarea>
            </div>


            <div class="text-center">
                <button type="submit" name="send" class="btn btn-primary  rounded-pill"> Send message</button>
            </div>
            </form>
        </div>
    </div>    
</div>
</section>




<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>
</body>
</html>