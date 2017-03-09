/**
 * Created by priyankark on 9/3/17.
 */
import React, {Component} from 'react';

class Gallery extends Component{
    render()
    {
        return(
            <div>
                {this.props.items.map((item,index)=>{
                    let {title,imageLinks,infoLink}=item.volumeInfo;


                    return (
                        <div key={index} className="book">
                            <a key={index}
                            className="book"
                               href={infoLink}
                               target="_blank"
                               >
                            <img src={imageLinks!==undefined?imageLinks.thumbnail:''} alt="Book Image" className="book-img"/>
                            <div className="book-text">

                            {title}
                            </div>
                                </a>

                        </div>

                    );
                    }

                )}



            </div>

        );
    }

}

export default Gallery;
