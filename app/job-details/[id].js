import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { COLORS, SIZES } from "../../constants";
import {Company, JobTabs, ScreenHeaderBtn} from "../../components";
import Icons from "../../constants/icons";
import { useState } from "react";


const tabs = ["About", "Qualifications", "Responsibilities"]
const JobDetails = () => {
  const [refreshing, setRefreshing] = useState(false);
  const params = useGlobalSearchParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(tabs[0])
  const { isLoading, data, refetch, error } = useFetch("job-details", {
    job_id: params.id,
  });

  const displayTabContent = () => {
      switch (activeTab){
          case "Qualifications":
          case "About":
          case "Responsibilities":
      }
  }

  const onRefresh = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={Icons.left}
              dimension={"60%"}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={Icons.share}
              dimension={"60%"}
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} style={{minHeight: "90%"}} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : !data.length ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
                jobPublisher={data[0].job_publisher}
              />
                <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;