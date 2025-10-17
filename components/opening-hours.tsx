"use client"

export default function OpeningHours() {
  const hours = [
    { day: "Monday", time: "07.00 AM – 21.00 PM" },
    { day: "Tuesday", time: "07.00 AM – 21.00 PM" },
    { day: "Wednesday", time: "07.00 AM – 21.00 PM" },
    { day: "Thursday", time: "07.00 AM – 21.00 PM" },
    { day: "Friday", time: "07.00 AM – 21.00 PM" },
    { day: "Saturday", time: "07.00 AM – 21.00 PM" },
    { day: "Sunday", time: "07.00 AM – 21.00 PM" },
  ]

  return (
    <section
      id="opening-hour"
      className="py-16 px-4 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Opening Hours</h2>
        <p className="text-center text-muted-foreground mb-12">
          Visit us during our convenient business hours
        </p>

        <div className="grid md:grid-cols-7 gap-3 max-w-5xl mx-auto">
          {hours.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition"
            >
              <h3 className="font-semibold mb-2 text-sm">{item.day}</h3>
              <p
                className={`font-bold text-sm ${
                  item.time === "Closed" ? "text-destructive" : "text-primary"
                }`}
              >
                {item.time}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need service outside these hours? Contact us for special arrangements.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
