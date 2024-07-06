//packages
import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

//styles
import headerStyle from "./styles/headerStyle";
import sectionStyle from "./styles/sectionStyle";

//components
import ChangeStateButton from "./components/changeStateButton";
import ContainerState from "./components/containerState";

//asssets
import basket from "./assets/basket-svgrepo-com.svg";
import person from "./assets/person-male-svgrepo-com.svg";
import repeat from "./assets/repeat-svgrepo-com.svg";
import image from "./assets/packet.jpg";

const App = () => {
  const [containerState, setContainerState] = useState(0);

  const [item_1, setItem_1] = useState(0);
  const [item_2, setItem_2] = useState(0);
  const [item_3, setItem_3] = useState(0);
  const [item_4, setItem_4] = useState(0);
  const [item_5, setItem_5] = useState(0);
  const [item_6, setItem_6] = useState(0);
  const [item_7, setItem_7] = useState(0);
  const [item_8, setItem_8] = useState(0);

  const [tutar, setTutar] = useState(0);

  useEffect(() => {
    console.log(image);
    const value = [6.084, 7.14, 8.003, 3.759, 4.323, 7.874, 8.488, 8.974];
    const counts = [
      item_1,
      item_2,
      item_3,
      item_4,
      item_5,
      item_6,
      item_7,
      item_8,
    ];
    const calculatePrice = () => {
      let total = 0;
      for (let i = 0; i < counts.length; i++) {
        var count = counts[i];
        if (count !== 0) {
          total += count * value[i];
        }
      }
      return total;
    };
    setTutar(calculatePrice());
  }, [item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8]);

  return (
    <View style={headerStyle.pageContainer}>
      <View style={headerStyle.headerContainer}>
        <View style={headerStyle.pageIconContainer}>
          <Pressable>
            <Text style={headerStyle.iconText}>beije.</Text>
          </Pressable>
        </View>
        <View style={headerStyle.headerLinksContainer}>
          <Pressable>
            <Text style={headerStyle.linkText}>Ürünler</Text>
          </Pressable>
          <Pressable>
            <Text style={headerStyle.linkText}>Biz Kimiz?</Text>
          </Pressable>
          <Pressable>
            <Text style={headerStyle.linkText}>Bağış Kültürü</Text>
          </Pressable>
          <Pressable>
            <Text style={headerStyle.linkText}>Regl Testi!</Text>
          </Pressable>
          <Pressable>
            <Text style={headerStyle.linkText}>Kendi Paketini Oluştur</Text>
          </Pressable>
        </View>
        <View style={headerStyle.headerAddToChartContainer}>
          <Pressable>
            <Image style={{ width: 24, height: 24 }} source={{ uri: basket }} />
          </Pressable>
          <Pressable>
            <Image style={{ width: 24, height: 24 }} source={{ uri: person }} />
          </Pressable>
        </View>
      </View>

      <View style={sectionStyle.sectionContainer}>
        <View style={sectionStyle.packageCreateContainer}>
          <View style={sectionStyle.packageInfoContainer}>
            <View style={sectionStyle.sectionTitle}>
              <Text style={{ fontSize: 28, fontWeight: "600" }}>
                Kendi Paketini Oluştur!
              </Text>
              <Pressable>
                <Text style={{ fontSize: 22 }}>Nasıl Çalışır?</Text>
              </Pressable>
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>
                Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
                miktarlardan, sana özel bir paket oluşturalım.
              </Text>
            </View>
            <View style={sectionStyle.changeSliderContainer}>
              <ChangeStateButton
                onPressFunction={setContainerState}
                title={"beije Ped"}
                value={0}
              ></ChangeStateButton>
              <ChangeStateButton
                onPressFunction={setContainerState}
                title={"beije Günlük Ped"}
                value={1}
              ></ChangeStateButton>
              <ChangeStateButton
                onPressFunction={setContainerState}
                title={"beije Tampon"}
                value={2}
              ></ChangeStateButton>
            </View>
          </View>
          <View style={{ flex: 1, minHeight: 400 }}>
            <View style={{ width: "100%", height: "100%" }}>
              <ContainerState
                items={[
                  item_1,
                  item_2,
                  item_3,
                  item_4,
                  item_5,
                  item_6,
                  item_7,
                  item_8,
                ]}
                setItems={[
                  setItem_1,
                  setItem_2,
                  setItem_3,
                  setItem_4,
                  setItem_5,
                  setItem_6,
                  setItem_7,
                  setItem_8,
                ]}
                containerState={containerState}
              ></ContainerState>
            </View>
          </View>
        </View>
        <View style={sectionStyle.showPackageInfoContainer}>
          <View
            style={{
              width: "100%",
              height: 450,
              position: "relative",
              top: 0,
              right: 0,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                width: "90%",
                alignSelf: "center",
                height: 60,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 24 }}>Özel Paketin</Text>
            </View>
            <View
              style={{
                width: "90%",
                alignSelf: "center",
                alignContent: "center",
                height: 40,
              }}
            >
              <View
                style={{
                  height: "100%",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: "100%",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 34,
                      height: 34,
                      marginRight: 15,
                      alignSelf: "stretch",
                    }}
                    source={{ uri: repeat }}
                  />
                </View>

                <Text style={{ fontSize: 20, flex: 1 }}>2 ayda 1 gönderim</Text>
              </View>
            </View>
            <View
              style={{
                width: "90%",
                height: 240,
                alignSelf: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={{
                  uri: image,
                }}
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              />
            </View>
            <Pressable
              style={{
                width: "90%",
                alignSelf: "center",
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 10,
                backgroundColor: "#ddd",
                opacity: tutar !== 0 ? 1 : 0.7,
              }}
              disabled={tutar !== 0 ? false : true}
            >
              <Text style={{ fontSize: 20 }}>
                Sepete Ekle (₺ {tutar.toFixed(2).replace(".", ",")})
              </Text>
            </Pressable>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default App;
