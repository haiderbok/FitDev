import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { getCategories, getExerciseNames } from './firestore';
import { List } from 'react-native-paper';

class Home extends Component {

  constructor() {
    super();
    this.state = { categoriesWithExercises: [], expanded: [] };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(i) {
    let updatedExpanded = this.state.expanded;
    updatedExpanded[i] = !updatedExpanded[i];
    this.setState({ expanded: updatedExpanded });
  }

  async componentDidMount() {
    const categoriesWithExercises = [];
    const categories = await getCategories();
    for (let i = 0; i < categories.length; i++) {
      const exerciseNames = await getExerciseNames(categories[i].id);
      categoriesWithExercises.push({ categoryName: categories[i].name, exerciseNames });
    }
    this.setState({ categoriesWithExercises });
    this.setState({ expanded: Array(categoriesWithExercises.length).fill(false) });
  }

  render() {
    return (
      <ScrollView>
        <List.Section title="Exercises">
          {this.state.categoriesWithExercises.map((val, i) => (
            <List.Accordion key={i} title={val.categoryName} expanded={this.state.expanded[i]} onPress={() => this.handlePress(i)}>
              {val.exerciseNames.map((exerciseName, j) => (
                <List.Item key={j} title={exerciseName} />
              ))}
            </List.Accordion>)
          )}
        </List.Section>
      </ScrollView>
    );
  }
}

export default Home;