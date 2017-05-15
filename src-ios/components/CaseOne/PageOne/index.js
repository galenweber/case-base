import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import styles from '../../case-styles';


export default function PageOne(props) {
  console.log('styles are ', JSON.stringify(styles));
  return (
    <ScrollView>
      <Text
        style={styles.header}
      >
        Broadband in Basra
      </Text>
      <Text
        style={styles.paragraph}
      >
        Al-Asham Technologies (AAT) is an early stage tech startup in Basra, southeastern Iraq’s largest city. While the company is officially incorporated, at this point it exists only on paper.
      </Text>
      <Text
        style={styles.paragraph}
      >
        The backing investors are hoping to build AAT into a major Basra-based broadband internet provider. Under Saddam Hussein, internet availability was scarce, and provided by a single state-owned enterprise, al-Bal National. Under the new government, private companies have been allowed to enter the market.
      </Text>
      <Text
        style={styles.paragraph}
      >
        The investors would like to assess the viability of their business plan before making any major investment. They’ve brought in your firm to that end.
      </Text>
      <Text
        style={styles.paragraph}
      >
        Here are some of the basic background points:
      </Text>
      <Text
        style={styles.paragraph}
      >
        In order to provide internet service, AAT would rent cable access from the old state enterprise for each customer served. The price is set by the Iraqi equivalent of the Federal Communications Commission in the United States. Currently the annual rate is set at $20 USD per customer (all prices have been converted from Iraqi dinar to USD for this case).
      </Text>
      <Text
        style={styles.paragraph}
      >
        For its part, AAT must provide:
      </Text>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text
            style={styles.paragraph}
          >
            1.&nbsp;
          </Text>
          <Text
            style={styles.paragraph}
          >
            The modems used in the consumer’s home
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text
            style={styles.paragraph}
          >
            2.&nbsp;
          </Text>
          <Text
            style={styles.paragraph}
          >
            The servers that allow access to web pages.
          </Text>
        </View>
      </View>
      <Text
        style={styles.paragraph}
      >
        Constructing a server center incurs a fixed cost of $20.5 million. After that, each server costs $125,000. An AAT investor has a relationship with a Chinese vendor that can provide modems for $23 each. AAT would grant them free of charge to new customers and provide replacements at cost.
      </Text>
      <Text
        style={styles.paragraph}
      >
        Each server costs $1,000 annually to run and maintain. Customer support would be provided by an outside contractor, who charges $20 per customer per year.
      </Text>
      <Text
        style={styles.paragraph}
      >
        AAT’s area of operation will be Basra city proper (population 400,000) and the surrounding neighborhoods (home to an additional 300,000). However, only a fraction of the area’s population can afford broadband access. Currently, the state-owned enterprise provides service to 156,000 contract customers. Industry reports suggest that is around 78% of the total market in the Basra metropolitan area.
      </Text>
    </ScrollView>
  )
}

