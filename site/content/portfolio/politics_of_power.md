+++
date = "2016-01-25T11:04:14+08:00"
title = "politics of power"
subtitle="Multi-plugs with manufactured ideologies"
img="politicsofpower.gif"
tags=["Real/Fictional", "Machine Biases"]

[galleries]

[[galleries.gallery]]
  name="heroGallery"

  [[galleries.gallery.item]]
  type="photo"
  img = "pop1a.jpg"
  captionTitle = ""
  captionDescription = ""

  # [[galleries.gallery.item]]
  # type="photo"
  # img = "technic.jpg"
  # captionTitle = ""
  # captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "pop6a.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "pop5a.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "pop8.jpg"
  captionTitle = ""
  captionDescription = ""


[[galleries.gallery]]
  name="instructions"

  [[galleries.gallery.item]]
  type="photo"
  img = "model-d.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "model-m.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "model-t.jpg"
  captionTitle = ""
  captionDescription = ""

+++


With a growing number of networked and autonomous objects as well as the outbreak of fields such as « the IoT », communication protocols used by connected products are increasingly important as they act as the network’s backbone.
Since the end product is « black-boxed » to the user, we often assume that all nodes of a network are equal.
But is it?

For example, in a home, two appliances in the same network must be working at the same time, but because of a power shortage, they cannot run in parallel. This bring us to question, who should be given the priority and why?
In every existing network – be it machine or nature, rules are established in order to determine its structure, hierarchy, and the way the communication will be synchronized between all the actors of the network. But who and what criterions will define this power hierarchy? Products and networks are inherently embedded with ideologies of the designers, engineers, and other stakeholders who shape their trajectory along the way.

“Politics of Power” is an exploration of these questions on a micro-scale by using a simple ubiquitous product, the multi-plug.
The project looks at how a mass-manufactured product – although developed for a precise and unique purpose – could behave differently depending on the nature of its communication protocol and how the design of the product itself could reflect these hidden logic and rules.
Three multi-plugs – Model D, M and T – are designed to look and behave based on different ideologies and structures, allowing people to experience the hidden politics of networks in an everyday life products through an electrical system.

{{< vimeo id="155295826">}}

## The products


{{< gallery type="full" galleryName="heroGallery" >}}

## How it works

{{<image img="technic.jpg">}}

{{< gallery type="grid" galleryName="instructions" >}}

## Plugs Constitutions

{{< tabs >}}
  {{% tab "Model D" %}}

    # Constitution for Model D
    # Egalitarian architecture

    # --- Election Routine ---
    # Define which plug has the
    # highest power

    Elections:

    # When are the next elections?
    In_Charge_Time = Random(X_MINUTES)

    # Each plugs vote for the president
    for 1 to N_PLUGS:

    vote = Random(1,N_PLUGS)

    In_Charge = Plug with Highest vote
    In_Charge_Corruption++

    # The plug on left and right of the
    # president become party
    Right_Party = In_Charge + 1
    Left_Party = In_Charge - 1
    Citizens = Remaining Plugs

    # --- Attribute Power Levels ---
    # What amount of power each plug
    # should have

    Attribute_Power_Levels:

    for 1 to N_PLUGS:

    if In_Charge:

    In_Charge = HIGHEST_POWER_LEVEL

    else if Party:

    Party = MIDDLE_POWER_LEVEL

    else if Citizens:

    Citizens = LOW_POWER_LEVEL

    # --- Egalitarian Setup ---
    Egalitarian_Constitution:

    Elections()
    Attribute_Level_Power()

    # --- Reelection Routine ---
    # Reelect a plug that is
    # in charge

    Reelections:

    if Current_Time &gt;= Presidency Time:

    Elections()
    if President Corruption &gt; 3:

    HIGHEST_POWER_LEVEL++
    MIDDLE_POWER_LEVEL--
    LOW_POWER_LEVEL--

    else:

    President Corruption = 0

    Attribute_Power_Level()

    # --- In_Charge Unplugged ---
    # Delegate when the In_charge
    # is unplugged

    In_Charge_Unplugged:

    # The new In_Charge is either
    # the left or right party
    In_Charge = Random(Left, Right)

    if In_Charge == Right:

    Right_Party = In_Charge+1
    # Left party stays the same

    else if In_Charge == Left

    Left_Party = In_Charge-1
    #Right party stays the same

    Attribute_Power_Level()

    # --- Party Unplugged ---
    # Delegate when one Party
    # is unplugged

    Party_Unplugged:

    # If right party unplugged
    # then the plug on its right
    # is becoming right party...
    # Same for left party
    if Party_Unplugged == Right:

    Right_Party = Right_Party + 1

    else if Party_Unplugged == Left:

    Left_Party = Left_Party - 1

    Attribute_Power_Level()

    # --- Citizen Unplugged ---
    # Delegate when one Citizen
    # is unplugged

    Citizen_Unplugged:

    # If a citizen is unplugged
    # then nothing happen
    if Plugged_Citizen == 0:

    # The egalitarian is destroyed
    # as no citizen are remaining
    # The government become citizens..
    Citizen = Party
    Citizen = In_Charge

    Attribute_Power_Level()

  {{% /tab %}}
  {{% tab "Model M" %}}

    # Constitution for Model M
    # Pyramidal architecture

    # --- Establish Pyramidal ---
    # Define which plug has the
    # highest power

    Assign_Hierarchical_Power:

    Top_Pyramid = HIGHEST_POWER_LEVEL
    Middle_Pyramid = MIDDLE_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL

    Top_Lifespan = Random(X_MINUTES)

    # --- Pyramidal Setup ---
    Pyramidal_Constitution:
    Assign_Hierarchical_Power()

    # --- Pyramidal Refresh ---
    Refresh_Pyramidal:

    Top_Pyramid = NO_POWER_LEVEL
    Middle_Pyramid = HIGHEST_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL

    if Current_Time >= Mourning_Time:
    Assign_Hierarchical_Power()
    Assign_Hierarchical_Power()

    // --- Top Unplugged ---
    // Delegate when the top is unplugged
    Top_Unplugged:
    // The top is more of an icon
    //no big power changes if he isnt here
    Middle_Pyramid = HIGHEST_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL
    # --- Middle Unplugged ---
    # Delegate when one plug in middle is
    # unplugged
    Middle_Unplugged:
    # If all middle plugs are out
    # then the bottom level is in chaos
    if Middle_Pyramid == 0:

    Bottom_Pyramid = UNSTABLE_POWER_LEVEL

    # --- Bottom Unplugged ---
    # Delegate when one plug in bottom is
    # unplugged
    Bottom_Unplugged:

    # Plebs, nothing happen
    NULL

  {{% /tab %}}

  {{% tab "Model T" %}}

    # Constitution for ModelT
    # Uneven architecture

    # --- Define Tyran Power ---
    # Define the power relation
    # of the authoritarian ideology

    Set_Tyran_Behaviour:

    # Benevolent or not tyran?
    Is_Benevolant = Random(1,2)

    if Is_Benevolent:

    Citizens = VERY_LOW_POWER_LEVEL
    Tyran = HIGHEST_POWER_LEVEL
    # Citizen take longer to rebel
    # if the tyran is benevolent
    Rebellion_Time = Random(X_MINUTES*2)

    else:

    Citizen = NO_POWER_LEVEL
    Tyran = HIGHEST_POWER_LEVEL
    Rebellion_Time = Random(X_MINUTES)

    # --- Authoritarian Setup ---
    Authoritarian_Constitution:

    Set_Tyran_Behaviour()

    # --- Define the rebellion ---
    # Define the power behaviour
    # once citizens rebel against the tyran
    Rebellion:

    if Current_Time &gt;= Rebellion_Time:

    Tyran = MIDDLE_POWER_LEVEL
    # Unstable means the power fluctuate
    # between HIGH / LOW
    Citizen = UNSTABLE_POWER_LEVEL
    Rebellion_Lifespan = Random(X_MINUTES)

    # Stop the rebellion after a certain
    # time. The tyran goes back to power
    if Current_Time &gt;= Rebellion_Lifespan:

    Set_Tyran_Behaviour()

    # --- Tyran Unplugged ---
    # Delegate when the tyran is unplugged
    Tyran_Unplugged:

    # NO ORDER = CHAOS
    Citizen = UNSTABLE_POWER_LEVEL

    # Chaotic times...
    Time_Chaos = Random(X_MINUTES)

    # --- Citizens Unplugged ---
    # Delegate when a citizen is unplugged
    Citizen_Unplugged:

    # Nothing happens, citizens are
    # worthless
    NULL

    # --- Egalitarian emerges ---
    # If tyran isn't plugged for a certain
    # amount of time, egalitarian emerges from
    # chaos
    Birth_Of_Egalitarian:

    if Current_Time &gt;= Time_Chaos:

    destroy(Authoritarian_Constitution()) Egalitarian_Constitution()

    # --- Egalitarian Destroyed ---
    # If tyran is plugged back when egalitarian
    # then it destroys it
    Death_Of_Egalitarian:

    destroy(Egalitarian_Constitution()) Authoritarian_Constitution()


  {{% /tab %}}
{{< /tabs >}}
