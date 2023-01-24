import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


export default function Rides() {
  return (
    <div className='ridepage'>
    <section className="h-100" style={{ backgroundColor: "rgb(122, 182, 199)" }}>
      <MDBContainer className="py-5 h-100" >
        <MDBRow className="justify-content-center align-items-center h-100" >
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
            </div>
            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src="https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-incredible-hulk-coaster-universal-dusk-b.jpg"
                      alt="" />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3">
                    <p className="lead fw-normal mb-2">The Incredible Hulk Coaster</p>
                    <p>
                    <span className="text-muted">Universal Express Pass: Available </span>
                        <div>
                        <span className="text-muted"> Single Rider: Available </span>                  
                       </div>
                    </p>
                  </MDBCol>
                  <MDBCol md="3" lg="4" xl="5"
                    className="d-flex align-items-center justify-content-around">
                    You’ve volunteered to take part in a science experiment based on Dr. Bruce Banner’s research—but a blast of gamma radiation changes everything. You launch up to 67 miles per hour as Hulk-like power propels you upside down into a zero-gravity roll, racing faster and faster. Hang on as this high-speed, red-line rampage smashes its way through the sky.
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="minus" />
                    </MDBBtn>
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src="https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-amazing-adventures-of-spiderman-ride-exterior-sign-b.jpg"
                      alt="" />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3">
                    <p className="lead fw-normal mb-2">The Amazing Adventures of Spider-Man</p>
                    <p>
                      <span className="text-muted">Universal Express Pass: Available </span>
                        <div>
                        <span className="text-muted"> Single Rider: Available </span>                  
                       </div>
                    </p>
                  </MDBCol>
                  <MDBCol md="3" lg="4" xl="5"
                    className="d-flex align-items-center justify-content-around">
                    Strap on your 3-D glasses and join the world's most famous webslinger on a high-flying adventure. Villains have stolen the Statue of Liberty and it's up to Spidey to save the day. Face a cast of Marvel characters as you soar above the streets, scale skyscrapers and battle bad guys left and right. Just watch out for the 400-foot freefall.
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="minus" />
                    </MDBBtn>
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src="https://blog.discoveruniversal.com/wp-content/uploads/2022/05/Feature-Dudley-Do-Rights-Ripsaw-Falls-Blog.jpg"
                      alt="" />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3">
                    <p className="lead fw-normal mb-2">Dudley Do-Right's Ripsaw Falls</p>
                    <p>
                      <span className="text-muted">Universal Express Pass: Available </span>
               
                        <div>
                        <span className="text-muted"> Single Rider: Available </span>
                      

                        </div>
                    </p>
                  </MDBCol>
                  <MDBCol md="3" lg="4" xl="5"
                    className="d-flex align-items-center justify-content-around">
                    Part roller coaster, part water flume, this ride combines the fun of the classic cartoons with edge-of-your-seat action. You'll slosh your way through twists and turns along with lovably laughable Royal Canadian Mountie, Dudley Do-Right. As you approach a nail-biting 75-foot drop, get ready to whoosh down the track for the biggest splash of your life.
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="minus" />
                    </MDBBtn>
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src="https://orlandoinformer.com/wp-content/uploads/2019/05/Hagrids-Magical-Creatures-Motorbike-Adventure-1.jpg"
                      alt="" />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3">
                    <p className="lead fw-normal mb-2">Hagrid’s Magical Creatures Motorbike Adventure</p>
                    <p>
                      <span className="text-muted">Universal Express Pass: N/A </span>
                        <div>
                        <span className="text-muted"> Single Rider: N/A </span>
                        </div>
                    </p>
                  </MDBCol>
                  <MDBCol md="3" lg="4" xl="5"
                    className="d-flex align-items-center justify-content-around">
                    Now’s the time to join Hagrid™ as you fly deep into the wilds of the Forbidden Forest, beyond the grounds of Hogwarts™ castle, on a thrilling roller coaster ride that plunges into the paths of some of the wizarding world’s rarest magical creatures. Experience Universal’s most highly themed, immersive coaster—only at Universal’s Islands of Adventure.
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="minus" />
                    </MDBBtn>
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
           
    
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
    );
    }
