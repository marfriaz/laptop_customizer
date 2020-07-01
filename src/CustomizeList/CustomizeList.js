import React from "react";
import slugify from "slugify";
import CustomizeItem from "../CustomizeItem/CustomizeItem";
import CustomizeOption from "../CustomizeOption/CustomizeOption";

export default class CustomizeList extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <CustomizeOption
            selected={this.props.selected}
            itemHash={itemHash}
            feature={feature}
            item={item}
            key={item.name}
            updateFeature={this.props.updateFeature}
          />
        );
      });

      return (
        <CustomizeItem
          key={idx}
          feature={feature}
          options={options}
          featureHash={featureHash}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
