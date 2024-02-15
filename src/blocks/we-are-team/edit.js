import { isBlobURL } from "@wordpress/blob";
import { BlockControls, InspectorControls, MediaPlaceholder, MediaReplaceFlow, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function({ attributes, setAttributes }) {
    const {
      oneImage,
      twoImage,
      threeImage,
      fourImage,
      five,
      perOne,
      perTwo,
      perThree,
      perFour
    } = attributes;
    const blockProps = useBlockProps();

    const selectImage = (el, setTo) => {      
      let newImgURL = null;
      if(isBlobURL(el.url)){
        newImgURL = el.url
      } else {
        newImgURL = el.sizes ? el.sizes.weAreTeam.url : el.media_details.sizes.weAreTeam.source_url;
      }
      setAttributes({
        [setTo]: newImgURL
      })
    }

    return (
      <div { ...useBlockProps() }>
        <InspectorControls>
            <PanelBody title={__("Person Name", "we-are-team")}>
            <TextControl
              label={__("First Person", "we-are-team")}
              value={ perOne }
              onChange={ (val) => setAttributes( {perOne: val} ) }
            />
            <TextControl
              label={__("Second Person", "we-are-team")}
              value={ perTwo }
              onChange={ (val) => setAttributes( {perTwo: val} ) }
            />
            <TextControl
              label={__("Third Person", "we-are-team")}
              value={ perThree }
              onChange={ (val) => setAttributes( {perThree: val} ) }
            />
            <TextControl
              label={__("Fourth Person", "we-are-team")}
              value={ perFour }
              onChange={ (val) => setAttributes( {perFour: val} ) }
            />
            </PanelBody>
        </InspectorControls>
        <div className="omg">
            <div className="hex-wrap">

            {/* Image One */}
            {oneImage && <BlockControls>
              <MediaReplaceFlow
              name={__("Replace First Image", "we-are-team")}
              mediaURL={oneImage}
              accept="image/*"
              allowedTypes={["image"]}
              onError={(err) => console.error(err)}
              onSelect={ (el)=>selectImage(el, "oneImage") }
              />
              </BlockControls>
            }

            {/* Image Two */}
            {twoImage && <BlockControls>
              <MediaReplaceFlow
              name={__("Replace Second Image", "we-are-team")}
              mediaURL={twoImage}
              accept="image/*"
              allowedTypes={["image"]}
              onError={(err) => console.error(err)}
              onSelect={ (el)=>selectImage(el, "twoImage") }
              />
              </BlockControls>
            }

            {/* Image Three */}
            {threeImage && <BlockControls>
              <MediaReplaceFlow
              name={__("Replace Third Image", "we-are-team")}
              mediaURL={threeImage}
              accept="image/*"
              allowedTypes={["image"]}
              onError={(err) => console.error(err)}
              onSelect={ (el)=>selectImage(el, "threeImage") }
              />
              </BlockControls>
            }

            {/* Image Fourth */}
            {fourImage && <BlockControls>
              <MediaReplaceFlow
              name={__("Replace Fourth Image", "we-are-team")}
              mediaURL={fourImage}
              accept="image/*"
              allowedTypes={["image"]}
              onError={(err) => console.error(err)}
              onSelect={ (el)=>selectImage(el, "fourImage") }
              />
              </BlockControls>
            }

            <div className="hex tar negr" data-h2={perOne}></div>
            <div className="hex a1" data-h1="Our"></div>
            <div className="hex a2" data-h1="Team"></div>
            <div className="hex" data-h2={perTwo}></div>
        
            <div className="hex a2"></div>
        
            <div className="hex hex-layer">
              <MediaPlaceholder className="hex custom-admin-three"
              allowedTypes = { [ "image" ] }
              accept = { "image/*" }
              multiple = { false }
              icon = "admin users"
              onSelect = {(el)=>selectImage(el, "oneImage")}
              onError = {(err) => console.log(err)}
              disableMediaButtons = {oneImage}
              />
              {oneImage && (<a className="hex" href="#m1" style={{backgroundImage: `url("${oneImage}")` }}></a>)}
            </div>
        
            <div className="hex hex-layer">
              <MediaPlaceholder className="hex custom-admin-three"
              allowedTypes = { [ "image" ] }
              accept = { "image/*" }
              multiple = { false }
              icon = "admin users"
              onSelect = {(el)=>selectImage(el, "twoImage")}
              onError = {(err) => console.log(err)}
              disableMediaButtons = {twoImage}
              />
              {twoImage && (<a className="hex" href="#m1" style={{backgroundImage: `url("${twoImage}")` }}></a>)}
            </div>
        
            <div className="hex a2"></div>
        
            <div className="hex tar" data-h2={perThree}></div>
        
            <div className="hex hex-layer">
              <MediaPlaceholder className="hex custom-admin-three"
              allowedTypes = { [ "image" ] }
              accept = { "image/*" }
              multiple = { false }
              icon = "admin users"
              onSelect = {(el)=>selectImage(el, "threeImage")}
              onError = {(err) => console.log(err)}
              disableMediaButtons = {threeImage}
              />
              {threeImage && (<a className="hex" href="#m1" style={{backgroundImage: `url("${threeImage}")` }}></a>)}
            
            </div>
        
            <div className="hex hex-layer">
              <MediaPlaceholder className="hex custom-admin-three"
              allowedTypes = { [ "image" ] }
              accept = { "image/*" }
              multiple = { false }
              icon = "admin users"
              onSelect = {(el)=>selectImage(el, "fourImage")}
              onError = {(err) => console.log(err)}
              disableMediaButtons = {fourImage}
              />
              {fourImage && (<a className="hex" href="#m1" style={{backgroundImage: `url("${fourImage}")` }}></a>)}
            </div>
            <div className="hex negr" data-h2={perFour}></div>
            <div className="hex a1"></div>
            <div className="hex a1"></div>
            </div>
        </div>
      </div>
    );
  }