<template>
  <div>
    <div class="container">
      <div class="section">
        <img  src="../assets/img/homePicture.jpg" width="50%" alt="homePicture" />
        <h3>Home Page</h3>
        <div class="divider"></div>
        <div class="section">
          <div class="card-panel hoverable">
            <div class="card-image">
              <h5>Discover the brillant Michael Jackson in our Artist Page</h5>
              <div class="divider"></div>
              <div class="section">
                <h6>Today we are focus on a legend: Mychael Jackson !
                </h6>
              </div>
              <p>
                You can find information
                <router-link to="/artist">Here</router-link>
              </p>
            </div>
          </div>
          <div class="section">
            <div class="card-panel hoverable">
              <div class="card-image">
                <h5>New Feature on the Website: Album are available</h5>
                <div class="divider"></div>
                <div class="section">
                  <h6>We have a surprize for you, Album fonctionality is now working
                  </h6>
                </div>
                <p>
                  Go to our new feature
                  <router-link to="/album">Here</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


