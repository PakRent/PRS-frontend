import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Input from '../../components/Forms/Formgroup';
import Button from '../../components/Button/Button';
import './Layout.css';

class Layout extends Component {
    constructor(props){
        super(props)
    
   this.state = {
        opened : false,

        searchForm: {
            searchMethod:{
                elementType : 'select',
                elementConfig: {
                    options: 
                        [
                        { value : ' ' , displayValue: 'Select...'},
                        { value : 'buy', displayValue: 'Buy'},
                        { value : 'sell', displayValue: 'Sell'},
                        { value : 'rent', displayValue: 'Rent'}
                    ],
                },
                elementProperty:{
                    options:[
                        { value : ' ' , displayValue: 'Property Type...'},
                        { value : 'houses', displayValue: 'Houses'},
                        { value : 'commercial', displayValue: 'Commercial'},
                        { value : 'land', displayValue: 'Land'}

                    ],
                },
                elementLocation:{
                    options:[
                        { value : ' ' , displayValue: 'Location..'},
                        { value : 'lahore', displayValue: 'Lahore'},
                        { value : 'karachi', displayValue: 'Karachi'},
                        { value : 'peshawer', displayValue: 'Peshawer'},
                        { value : 'islamabad', displayValue: 'Islamabad'}

                    ],
                }
            }
        }
    }
    this.toggleBox = this.toggleBox.bind(this);
}
toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }
  render() {
      const formElementsArray = [];
        for(let key in this.state.searchForm){
            formElementsArray.push({
                id: key,
                config: this.state.searchForm[key]
            });
        }
        const { opened } = this.state;
    return (
      <div>
        <section className="hero-section bg-black-3">
            <Carousel />
        </section>
        <section className="search-property bg-black-4">
            <div className="container">
                <form action="#">
                    <div className="row">
                        <div className="form-group col-xl-7 lg-6 align-self-end">
                         
                         
                        <Input
                
                        inputtype="input"
                        type="adress"
                        name="adress"
                        placeholder="Enter your adress e.g Street City State. "
                        handlechange={this.handleinput}
                      />
                         
                        </div>

                        <div className="form-group col-lg-2 align-self-end">

                            {formElementsArray.map(formElement => (
                                <Input 
                                    key={formElement.id}
                                    elementType={formElement.config.elementType}
                                    elementConfig={formElement.config.elementConfig}
                                    value={formElement.config.value}
                                />
                            ))}
                        </div>

                        <div className="form-group col-xl-1 col-lg-2 align-self-end">
                            <Link to="#" className="more-filters btn btn-gradient btn-md full-width" onClick={this.toggleBox}>
                            <i className="fas fa-sliders-h"></i></Link>
                        </div>

                        <div className="form-group col-lg-2 align-self-end">
                            <Button type={'search'} className={"btn btn-gradient btn-lg"} style={{height:"40px"}} title={"Search"}/>
                        </div>

                        

                      
                    </div>
                    {/* Second Row */}
                    { opened && (
                        
                <div className="row all-options">
                
                    <div className="form-group col-lg-4">
                        <Input
                            inputtype="input"
                            type="text"
                            name="price"
                            placeholder="Min Price [PKR]"
                            handleinput={this.handleinput}
                            />
                    
                    </div>
                    <div className="form-group col-lg-4">
                        <Input
                            inputtype="input"
                            type="text"
                            name="price"
                            placeholder="Max Price [PKR]"
                            handleinput={this.handleinput}
                            />
                    
                    </div>
                    <div className="form-group col-lg-4">
                        {formElementsArray.map(formElement => (
                            <Input 
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementProperty}
                                value={formElement.config.value}
                            />
                        ))}
                    
                    </div>
                </div>
            
                )} 
                { opened && (
                    <div className="row all-options">
                
                    <div className="form-group col-lg-4">
                        <Input
                            inputtype="input"
                            type="text"
                            name="area"
                            placeholder="Min area Range [SQ]"
                            handleinput={this.handleinput}
                            />
                    
                    </div>
                    <div className="form-group col-lg-4">
                        <Input
                            inputtype="input"
                            type="text"
                            name="area"
                            placeholder="Max area Range [sq]"
                            handleinput={this.handleinput}
                            />
                    
                    </div>
                    <div className="form-group col-lg-4">
                        {formElementsArray.map(formElement => (
                            <Input 
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementLocation}
                                value={formElement.config.value}
                            />
                        ))}
                    
                    </div>
                    <div className="form group col-lg-12">
                        <label htmlFor="air_conditioning" className="label-template-checkbox">Air Conditioning
                            <input type="checkbox" name="air_conditioning" id="air_conditioning" />
                        </label>
                        <label htmlFor="alarm" className="label-template-checkbox">Alarm
                            <input type="checkbox" name="alarm" id="alarm" />
                        </label>
                        <label htmlFor="central_heating" className="label-template-checkbox">Central Heating
                            <input type="checkbox" name="central_heating" id="central_heating" />
                        </label>
                        <label htmlFor="gym" className="label-template-checkbox">Gym
                            <input type="checkbox" name="gym" id="gym" />
                        </label>
                        <label htmlFor="internet" className="label-template-checkbox">Internet
                            <input type="checkbox" name="internet" id="internet" />
                        </label>
                        <label htmlFor="laundry_room" className="label-template-checkbox">Laundry Room
                            <input type="checkbox" name="laundry_room" id="laundry_room" />
                        </label>
                        <label htmlFor="swimming_pool" className="label-template-checkbox">Swimming Pool
                            <input type="checkbox" name="swimming_pool" id="swimming_pool" />
                        </label>
                    </div>
                    
                </div>
                )}
                
                </form>
            </div>

            

        </section>
        

        
      </div>
    )
  }
}
export default Layout;