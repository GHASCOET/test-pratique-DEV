import { Section, Spacer, SpacerSize, Text, Title, TitleLevels, TypographyBold } from '@trilogy-ds/react'

export function Statement() {
  return (
    <Section>
      <Title level={TitleLevels.TWO}>Statement</Title>
      <Text>
        Our sales team needs a quick overview of the mobile plans returned by the offers API (GET /api/offers). Using
        the list displayed below and the API response, implement the following 3 features:
      </Text>
      <div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 1
          </Text>
          <Text>
            Display a summary showing how many plans belong to each category, for example "5G (4)". Each category must
            appear only once.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 2
          </Text>
          <Text>
            Make the search field work: only display plans whose name contains the typed text (case insensitive).
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 3
          </Text>
          <Text>
            Clicking the "Sort by price" button sorts the displayed plans from cheapest to most expensive. Clicking it
            again reverses the order. Sorting must keep working while a search is active.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
      </div>
      <div>
        <Text>
          <span className="has-text-weight-semibold">Exercise duration:</span> 30 minutes
        </Text>
      </div>
    </Section>
  )
}
