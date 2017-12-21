## Store of Assessments
#### Nomenclature Hierarchy
1. Examination
2. Assessment
3. Question
4. Component

In other words, An assessment is a battery of questions, each of which may contain multiple components.<br><br>
For example: Let's imagine an _assessment_ 'Sports Skills'. 'Sports Skills' contains three _questions_: 'baseball', 'soccer', and 'tennis'.<br><br>
The _question_ 'baseball' has two _components_: 'fielding' and 'batting'.<br>
The _question_ 'soccer' has two _components_: 'offense' and 'defense'.<br>
The _question_ 'tennis' has two _components_: 'serving' and 'backspin'.<br><br>

### JSON Schema
This directory should contain .json files with __questions__ in the form:<br>
```javascript
{
    "title": "Survey",
    "description": "Standard format for reporting survey questions",
    "type": "object",
    "properties": {
        "question_id": {
            "description": "The unique id for the question",
            "type": "integer"
        },
        "question": {
            "description": "The text description for the question",
            "type": "string"
        },
        "single_choice/multiple_choices/range": {
            "description": "The type for the question",
            "type": "boolean"
        },
        "answers": {
            "description": "The answers for the question",
            "type": "array",
            "items": {
                "answer_id": {
                    "description": "The id for the answer",
                    "type": "integer"
                },
                "answer": {
                    "description": "The text description for the answer",
                    "type": "string"
                }
            }
        }
        "required": ["question_id", "question", "answers"]
    }
}
```

<br>
The purpose of storing _questions_ and not entire _assessments_ is so that different combinations of questions can be delivered as a complete assessment to the front-end. 
