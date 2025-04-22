import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

type CourseSectionProps = {
  title: string;
  courseList: string[];
};

const CourseSection = ({ title, courseList }: CourseSectionProps) => (
  <View>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.courseText}>{courseList.join('\n')}</Text>
  </View>
);

const HomeScreen = () => {
  const coreCourses = [
    'CS504 - Software Engineering',
    'CS506 - Programming for Computing',
    'CS519 - Cloud Computing Overview',
    'CS533 - Computer Architecture',
    'CS547 - Secure Systems and Programs',
    'CS622 - Discrete Math and Algorithms for Computing',
    'CS510 - Artificial Intelligence for Data Science',
    'CS620 - Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS624 - Full-Stack Development - Mobile App',
    'CS628 - Full-Stack Development - Web App',
  ];

  const capstone = ['CS687 - Computer Science Capstone'];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.image}
        />
        <Text style={styles.prompt}>What is your favourite course?</Text>
        <TextInput
          style={styles.input}
          placeholder="ex: CS510 - Artificial Intelligence for Data Science"
        />
      </View>

      <View style={styles.courseBox}>
        <Text style={styles.header}>MSCS Courses</Text>
        <CourseSection title="Core Requirements (24 Credits)" courseList={coreCourses} />
        <CourseSection title="Depth of Study (6 Credits)" courseList={depthCourses} />
        <CourseSection title="Capstone Course (3 Credits)" courseList={capstone} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    backgroundColor: '#ffffff',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  prompt: {
    fontSize: 16,
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    color: '#9c9c98',
  },
  courseBox: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fafad9',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: '#f0f005',
    marginTop: 20,
  },
  courseText: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  },
});
