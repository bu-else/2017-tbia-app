## Store of Assessments
#### Nomenclature Hierarchy
1. Assessment
2. Question
3. Component

In other words, An assessment is a battery of questions, each of which may contain multiple components.<br><br>
For example: Let's imagine an _assessment_ 'Sports Skills'. 'Sports Skills' contains three _questions_: 'baseball', 'soccer', and 'tennis'.<br><br>
The _question_ 'baseball' has two _components_: 'fielding' and 'batting'.<br>
The _question_ 'soccer' has two _components_: 'offense' and 'defense'.<br>
The _question_ 'tennis' has two _components_: 'serving' and 'backspin'.<br><br>

### JSON Schema
This directory should contain .json files with __questions__ in the form:<br>


<br>
The purpose of storing _questions_ and not entire _assessments_ is so that different combinations of questions can be delivered as a complete assessment to the front-end. 
