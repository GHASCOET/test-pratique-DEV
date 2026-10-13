import { Section, Spacer, SpacerSize, Text, Title, TitleLevels, TypographyBold } from '@trilogy-ds/react'

const questions = [
  'List all categories of the displayed plans as buttons, without duplicates and sorted in alphabetical order. Each button shows the number of plans in that category, e.g. "5G (4)", and uses the category color from categoryColors.',
  'When clicking on a category button, only display the plans of the selected category. The active button must be visually highlighted.',
  'When clicking on the Reset button, display the complete list of plans again.',
  'Bonus: allow selecting several categories at once. Explain whether a plan must match all the selected categories or at least one of them.',
]

export function Statement() {
  return (
    <Section>
      <Title level={TitleLevels.TWO}>Statement</Title>
      <Text>
        Our sales team needs to browse the mobile plans returned by the offers API (GET /api/offers) by category. Using
        the list displayed below and the API response, implement the following features:
      </Text>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
              Question {index + 1}
            </Text>
            <Text>{question}</Text>
            <Spacer size={SpacerSize.THREE} />
          </div>
        ))}
      </div>
      <div>
        <Text>
          <span className="has-text-weight-semibold">Exercise duration:</span> 30 minutes
        </Text>
      </div>
    </Section>
  )
}
