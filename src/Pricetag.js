import React from 'react';
import { cardValues } from './cardValues';

export function Pricetag() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          
        {cardValues.map(({cardTitle,cardPrice,user,storage,unlimitedPublicProjects,communityAccess,unlimitedPrivateProjects,dedicatedPhoneSupport,freeSubdomain,monthlyStatusReport
},key)=>{
          return(
            <div className=" col-12  col-sm-8 col-md-6 col-lg-4" key={key}>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{cardTitle}</h5>
                  <h6 className="card-price text-center">${cardPrice}<span className="period">/month</span></h6>
                  <hr></hr>
                  <ul className="fa-ul">
                    <li className={user !=='Single' ? "font-weight-bold":" "}>
                      <span className="fa-li"><i className="fas fa-check"></i></span>
                      {(user !== 'Single' ? `${user} Users` : `Single User`)}
                    </li>
                    
                    <li className={storage ? " ": "text-muted"}>
                      <span className="fa-li"><i className="fas fa-check"></i></span>{storage ? `${storage} Storage `: `No Storage`}
                    
                    </li>
                    
                    <li className={unlimitedPublicProjects ? " ": "text-muted"}>
                      <span className="fa-li"><i className={ unlimitedPublicProjects ? "fas fa-check" :"fas fa-times"}></i></span>
                      Unlimited Public Projects
                    </li>
                    
                    <li className={communityAccess ? " ": "text-muted"}>
                      <span className="fa-li"><i className={ communityAccess ? "fas fa-check" :"fas fa-times"}></i></span>
                      Community Access
                    </li>
                    
                    <li className={unlimitedPrivateProjects ? " ": "text-muted"}>
                      <span className="fa-li"><i className={ unlimitedPrivateProjects ? "fas fa-check" :"fas fa-times"}></i></span>
                      Unlimited Private Projects
                    </li>
                   
                    <li className={dedicatedPhoneSupport ? " ": "text-muted"}>
                      <span className="fa-li"><i className={ dedicatedPhoneSupport ? "fas fa-check" :"fas fa-times"}></i>
                      </span>Dedicated Phone Support
                    </li>
                    
                    <li className={freeSubdomain ? " ": "text-muted"}>
                      <span className="fa-li"><i className={ freeSubdomain ? "fas fa-check" :"fas fa-times"}></i></span>Free Subdomain
                    </li>
                    
                    <li className={monthlyStatusReport ? " ": "text-muted"}>
                      <span className="fa-li"><i className={ monthlyStatusReport ? "fas fa-check" :"fas fa-times"}></i></span>Monthly Status Reports
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="/priceTag" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        
        }
          
        </div>
      </div>
    </section>
  );
}

